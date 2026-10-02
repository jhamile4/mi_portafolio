/**
 * Lógica de Interacción y Renderizado - Jhamile Macavilca Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  const projectsGrid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  // Modal Elements
  const modalOverlay = document.getElementById('modalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalDescription = document.getElementById('modalDescription');
  const modalStackTags = document.getElementById('modalStackTags');
  const modalArchitecture = document.getElementById('modalArchitecture');
  const modalDemoBtn = document.getElementById('modalDemoBtn');
  const modalGithubBtn = document.getElementById('modalGithubBtn');

  // Render Projects
  function renderProjects(filter = 'all') {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    filteredProjects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="project-thumb">
          <img src="${project.thumb}" alt="${project.title}" loading="lazy">
          <span class="project-category-badge">${project.categoryLabel}</span>
        </div>
        <div class="project-info">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="tech-tags">
            ${project.stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          <div class="project-actions">
            <button class="btn-editorial btn-primary open-details-btn" data-id="${project.id}">
              Ver Detalle & Enlaces
            </button>
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-editorial btn-outline">
              Demo ↗
            </a>
          </div>
        </div>
      `;
      projectsGrid.appendChild(card);
    });

    // Attach click handlers to open modal
    document.querySelectorAll('.open-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const projectId = e.currentTarget.getAttribute('data-id');
        openProjectModal(projectId);
      });
    });
  }

  // Filter Buttons Handler
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  // Open Project Modal Drawer
  function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    modalBadge.textContent = project.categoryLabel;
    modalTitle.textContent = project.title;
    modalImage.src = project.thumb;
    modalImage.alt = project.title;
    modalDescription.textContent = project.fullDescription;
    
    modalStackTags.innerHTML = project.stack
      .map(tech => `<span class="tech-tag" style="background: var(--bg-dark-surface); padding: 6px 12px; border: 1px solid var(--border-dark); border-radius: 6px; font-weight:600;">${tech}</span>`)
      .join('');
      
    modalArchitecture.textContent = project.architecture;
    
    modalDemoBtn.href = project.demoUrl;
    modalGithubBtn.href = project.githubUrl;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent scroll
  }

  // Close Modal
  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Initial Render
  renderProjects();
});
