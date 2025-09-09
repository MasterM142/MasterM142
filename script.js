const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

function downloadProject(projectName) {
    showNotification(`${projectName} wird heruntergeladen...`, 'success');
    
    const projectUrls = {
        'ClipsWebsite-forNetamiTV-main': 'https://github.com/n1yshi/ClipsWebsite-forNetamiTV',
        'CPP-FileProcessor-main': 'https://github.com/n1yshi/CPP-FileProcessor',
        'distributed-transaction-system-main': 'https://github.com/n1yshi/distributed-transaction-system',
        'Enterprise-platform-main': 'https://github.com/n1yshi/Enterprise-platform',
        'NetamiTV-BanSystem-Plugin': 'https://github.com/n1yshi/NetamiTV-BanSystem-Plugin',
        'NetamiTV-Bot-Old-Source-main': 'https://github.com/n1yshi/NetamiTV-Bot-Old-Source-',
        'PasswordGen-Extension-main': 'https://github.com/n1yshi/PasswordGen-Extension',
        'Phishing-DetectorURL-main': 'https://github.com/n1yshi/Phishing-DetectorURL',
        'Polyglot-System-main': 'https://github.com/n1yshi/Polyglot-System',
        'Report-Plugin-Minecraft': 'https://github.com/n1yshi/Report-Plugin-Minecraft',
        'TaskManagementSystem-main': 'https://github.com/n1yshi/TaskManagementSystem',
        'Twitch-LiveStreamer-Extension-main': 'https://github.com/n1yshi/Twitch-LiveStreamer-Extension',
        'TwitchWatchtimeBot-main': 'https://github.com/n1yshi/TwitchWatchtimeBot'
    };
    
    const link = document.createElement('a');
    link.href = projectUrls[projectName] || '#';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function viewProject(projectId) {
    const projectDetails = {
        'clips-website': {
            title: 'ClipsWebsite for NetamiTV',
            description: 'Comprehensive web platform for managing video clips with user authentication, Discord integration, admin panel, and IP-based security features.',
            technologies: ['Python', 'Flask', 'HTML/CSS', 'JavaScript', 'Discord API'],
            features: [
                'User Dashboard with account management',
                'Discord authentication integration',
                'Admin panel for verification data',
                'IP-based banning system',
                'Rate limiting for API protection'
            ]
        },
        'cpp-processor': {
            title: 'CPP File Processor',
            description: 'High-performance file processing system built in C++ for handling large datasets with optimized memory management.',
            technologies: ['C++', 'File Processing', 'Performance Optimization'],
            features: [
                'High-performance file processing',
                'Optimized memory management',
                'Parallel processing capabilities',
                'Large dataset handling'
            ]
        },
        'distributed-system': {
            title: 'Distributed Transaction System',
            description: 'Scalable distributed system architecture for handling complex transactions across multiple services.',
            technologies: ['Microservices', 'Docker', 'API Gateway'],
            features: [
                'Microservices architecture',
                'Fault tolerance mechanisms',
                'Scalable transaction processing',
                'Service discovery'
            ]
        },
        'enterprise-platform': {
            title: 'Enterprise Platform',
            description: 'Comprehensive enterprise-grade platform with advanced features for business management and analytics.',
            technologies: ['Enterprise Architecture', 'Cloud Computing', 'Analytics'],
            features: [
                'Enterprise-grade security',
                'Advanced analytics dashboard',
                'Workflow automation',
                'Scalable cloud architecture'
            ]
        },
        'ban-system': {
            title: 'NetamiTV Ban System Plugin',
            description: 'Advanced Minecraft server plugin for comprehensive ban management with database integration.',
            technologies: ['Java', 'Minecraft API', 'Database'],
            features: [
                'Comprehensive ban management',
                'Database integration',
                'Administrative tools',
                'Appeal system'
            ]
        },
        'netami-bot': {
            title: 'NetamiTV Discord Bot',
            description: 'Feature-rich Discord bot with moderation, entertainment, and utility commands.',
            technologies: ['Discord.js', 'Node.js', 'Database'],
            features: [
                'Advanced moderation tools',
                'Entertainment commands',
                'Utility functions',
                'Custom command system'
            ]
        },
        'password-generator': {
            title: 'SecurePass Generator',
            description: 'Modern browser extension for generating cryptographically secure passwords.',
            technologies: ['JavaScript', 'Chrome Extension API', 'CSS3'],
            features: [
                'Cryptographically secure passwords',
                'Real-time strength analysis',
                'Auto-fill functionality',
                'Dark mode interface'
            ]
        },
        'phishing-detector': {
            title: 'Phishing URL Detector',
            description: 'Advanced security tool using machine learning to detect phishing attacks.',
            technologies: ['Python', 'Machine Learning', 'Security APIs'],
            features: [
                'ML-based phishing detection',
                'URL pattern analysis',
                'Real-time threat assessment',
                'Security scoring system'
            ]
        },
        'polyglot-system': {
            title: 'Polyglot System',
            description: 'Multi-language system architecture supporting various programming languages.',
            technologies: ['Multi-Language Support', 'System Architecture'],
            features: [
                'Multi-language support',
                'Cross-platform compatibility',
                'Seamless integration',
                'Performance optimization'
            ]
        },
        'report-plugin': {
            title: 'Report Plugin Minecraft',
            description: 'Comprehensive reporting system for Minecraft servers with advanced moderation tools.',
            technologies: ['Java', 'Minecraft API', 'Database'],
            features: [
                'Comprehensive reporting system',
                'Advanced moderation tools',
                'Automated response mechanisms',
                'Evidence collection'
            ]
        },
        'task-management': {
            title: 'Task Management System',
            description: 'Real-time collaborative task management application with drag & drop Kanban board.',
            technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
            features: [
                'Real-time collaboration',
                'Drag & drop Kanban board',
                'User authentication',
                'Team management'
            ]
        },
        'twitch-extension': {
            title: 'Twitch LiveStreamer Extension',
            description: 'Browser extension for Twitch streamers with enhanced stream management features.',
            technologies: ['JavaScript', 'Twitch API', 'WebExtension API'],
            features: [
                'Stream management tools',
                'Viewer interaction features',
                'Real-time analytics',
                'Custom overlay support'
            ]
        },
        'twitch-bot': {
            title: 'Twitch Watchtime Bot',
            description: 'Automated Twitch bot for tracking viewer watchtime and managing rewards.',
            technologies: ['Python', 'Twitch API', 'Database'],
            features: [
                'Watchtime tracking system',
                'Reward management',
                'Interactive chat features',
                'Custom commands'
            ]
        }
    };
    
    const project = projectDetails[projectId];
    if (project) {
        showProjectModal(project);
    }
}

function showProjectModal(project) {
    const modalHTML = `
        <div class="modal-overlay" onclick="closeProjectModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>${project.title}</h2>
                    <button class="modal-close" onclick="closeProjectModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <p class="project-modal-description">${project.description}</p>
                    
                    <div class="modal-section">
                        <h3>Technologies Used</h3>
                        <div class="tech-tags">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Key Features</h3>
                        <ul class="feature-list">
                            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
    
    if (!document.querySelector('#modal-styles')) {
        const modalStyles = `
            <style id="modal-styles">
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2000;
                    animation: fadeIn 0.3s ease;
                }
                
                .modal-content {
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    max-width: 600px;
                    width: 90%;
                    max-height: 80vh;
                    overflow-y: auto;
                    animation: slideUp 0.3s ease;
                }
                
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 2rem 2rem 1rem;
                    border-bottom: 1px solid var(--border);
                }
                
                .modal-header h2 {
                    margin: 0;
                    color: var(--text);
                    font-size: 1.5rem;
                    font-weight: 700;
                }
                
                .modal-close {
                    background: transparent;
                    border: 2px solid var(--text);
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: var(--text);
                    transition: all 0.3s ease;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .modal-close:hover {
                    background: var(--text);
                    color: var(--bg);
                }
                
                .modal-body {
                    padding: 2rem;
                }
                
                .project-modal-description {
                    font-size: 1rem;
                    color: var(--text-dim);
                    margin-bottom: 2rem;
                    line-height: 1.6;
                }
                
                .modal-section {
                    margin-bottom: 2rem;
                }
                
                .modal-section h3 {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: var(--text);
                }
                
                .tech-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
                
                .feature-list {
                    list-style: none;
                    padding: 0;
                }
                
                .feature-list li {
                    padding: 0.5rem 0;
                    border-bottom: 1px solid var(--border);
                    color: var(--text-dim);
                    font-size: 0.95rem;
                }
                
                .feature-list li:last-child {
                    border-bottom: none;
                }
                
                .feature-list li::before {
                    content: '•';
                    color: var(--text);
                    font-weight: bold;
                    margin-right: 0.5rem;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', modalStyles);
    }
}

function closeProjectModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    if (!document.querySelector('#notification-styles')) {
        const notificationStyles = `
            <style id="notification-styles">
                .notification {
                    position: fixed;
                    top: 100px;
                    right: 2rem;
                    padding: 1rem 2rem;
                    background: var(--text);
                    color: var(--bg);
                    font-weight: 600;
                    z-index: 3000;
                    animation: slideInRight 0.3s ease;
                    max-width: 300px;
                    font-size: 0.9rem;
                }
                
                .notification-success {
                    background: var(--text);
                    color: var(--bg);
                }
                
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', notificationStyles);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top';
    button.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', createScrollToTopButton);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

window.addEventListener('scroll', () => {
    const currentSection = getCurrentSection();
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

function getCurrentSection() {
    const sections = ['home', 'about', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;
    
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
            return sections[i];
        }
    }
    
    return 'home';
}

const activeNavStyles = `
    <style id="active-nav-styles">
        .nav-link.active {
            opacity: 1;
        }
        
        .nav-link.active::after {
            width: 100%;
        }
    </style>
`;

if (!document.querySelector('#active-nav-styles')) {
    document.head.insertAdjacentHTML('beforeend', activeNavStyles);
}