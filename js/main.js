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
  const modalRole = document.getElementById('modalRole');
  const modalHighlights = document.getElementById('modalHighlights');
  const modalStackTags = document.getElementById('modalStackTags');
  const modalArchitecture = document.getElementById('modalArchitecture');
  const modalDemoBtn = document.getElementById('modalDemoBtn');
  const modalGithubBtn = document.getElementById('modalGithubBtn');
  const modalPrivateNote = document.getElementById('modalPrivateNote');

  // Botones de enlaces: solo se muestran los que existen
  function linkButtons(project) {
    const buttons = [];
    if (project.githubUrl) {
      buttons.push(`<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-editorial btn-outline">Código ↗</a>`);
    }
    if (project.demoUrl) {
      buttons.push(`<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-editorial btn-outline">Demo ↗</a>`);
    }
    return buttons.join('');
  }

  // Render Projects
  function renderProjects(filter = 'all') {
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    const filteredProjects = filter === 'all'
      ? projectsData
      : projectsData.filter(p => p.categories.includes(filter));

    filteredProjects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="project-thumb">
          <img src="${project.thumb}" alt="Captura de ${project.title}" loading="lazy">
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
              Ver detalle
            </button>
            ${linkButtons(project)}
          </div>
          ${project.privateNote ? `<p class="project-private-note">🔒 ${project.privateNote}</p>` : ''}
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

  function showLink(button, url) {
    button.style.display = url ? '' : 'none';
    if (url) button.href = url;
  }

  // Open Project Modal Drawer
  function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    modalBadge.textContent = project.categoryLabel;
    modalTitle.textContent = project.title;
    modalImage.src = project.thumb;
    modalImage.alt = `Captura de ${project.title}`;
    modalDescription.textContent = project.fullDescription;
    modalRole.textContent = project.role;

    modalHighlights.innerHTML = '';
    project.highlights.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      modalHighlights.appendChild(li);
    });

    modalStackTags.innerHTML = project.stack
      .map(tech => `<span class="tech-tag" style="background: var(--bg-dark-surface); padding: 6px 12px; border: 1px solid var(--border-dark); border-radius: 6px; font-weight:600;">${tech}</span>`)
      .join('');

    modalArchitecture.textContent = project.architecture;

    showLink(modalDemoBtn, project.demoUrl);
    showLink(modalGithubBtn, project.githubUrl);
    modalPrivateNote.textContent = project.privateNote ? `🔒 ${project.privateNote}` : '';
    modalPrivateNote.style.display = project.privateNote ? '' : 'none';

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
