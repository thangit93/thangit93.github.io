<template>
  <div class="container" :key="lang">
    <div class="language-switcher">
      <button :class="{ active: lang === 'en' }" @click="setLang('en')">EN</button>
      <span> | </span>
      <button :class="{ active: lang === 'vi' }" @click="setLang('vi')">VI</button>
    </div>
    <div class="row mt-4">
      <!-- Sidebar -->
      <div class="col-lg-4 sidebar">
        <img src="~/assets/images/avatar.webp" alt="Thang Tran" class="profile-img">
        <div class="name">{{ name }}</div>
        <div class="title">{{ currentData.title }}</div>
        
        <div class="section contact">
          <h2>// {{ currentData.labels.contact }}</h2>
          <p v-for="(item, key) in currentData.contact" :key="key">{{ key }}: <a v-if="isValidURL(item)" :href="item" target="_blank">{{ item }}</a><span v-else>{{ item }}</span></p>
        </div>
        
        <div class="section skills">
          <h2>// {{ currentData.labels.skills }}</h2>
          <ul>
            <li v-for="skill in currentData.skills" :key="skill">{{ skill }}</li>
          </ul>
        </div>
        
        <div class="section education">
          <h2>// {{ currentData.labels.education }}</h2>
          <div class="education-item" v-for="edu in currentData.education" :key="edu.degree">
            <p>{{ edu.degree }}</p>
            <p class="date">{{ edu.date }}</p>
          </div>
        </div>
      </div>
      <!-- Main Content -->
      <div class="col-lg-8 main">
        <div class="section">
          <h2>// {{ currentData.labels.about }}</h2>
          <p>{{ currentData.about }}</p>
        </div>
        
        <div class="section">
          <h2>// {{ currentData.labels.expertise }}</h2>
          <div class="expertise-block">
             <div v-for="(group, key) in currentData.expertise" :key="key" class="mb-3">
               <h4 class="expertise-title">{{ group.title }}</h4>
               <ul class="expertise-list">
                 <li v-for="item in group.items" :key="item">{{ item }}</li>
               </ul>
             </div>
          </div>
        </div>

        <div class="section">
          <h2>// {{ currentData.labels.experience }}</h2>
          <div class="experience-item" v-for="exp in currentData.experience" :key="exp.title">
            <h3>{{ exp.title }}</h3>
            <p class="date">{{ exp.date }}</p>
            <p>{{ exp.description }}</p>
            <ul v-if="exp.highlights && exp.highlights.length" class="highlights">
              <li v-for="highlight in exp.highlights" :key="highlight">{{ highlight }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';

const lang = ref('en'); // Default language

const name = "Tran Duc Thang";

const dataVI = {
  title: "Fullstack Developer",
  labels: {
    contact: "Liên hệ",
    skills: "Kỹ năng",
    about: "Mục tiêu",
    experience: "Kinh nghiệm",
    education: "Học vấn",
    expertise: "Chuyên môn"
  },
  contact: {
    "SĐT": "0979372228",
    "Email": "thangtd1993@gmail.com",
    "Website": "https://thangit93.github.io",
    "Địa chỉ": "Hà Nội, Việt Nam"
  },
  skills: [
    "PHP: Yii2, Laravel, CakePHP, Zend",
    "JS: VueJS, ReactJS, NextJS, NuxtJS",
    "Python: Flask, Django",
    "Go: Echo",
    "Database: MySQL, PostgreSQL, Redis, Elasticsearch",
    "DevOps: CI/CD, Docker, AWS"
  ],
  about: "Technical Leader cấp cao với hơn 9 năm kinh nghiệm chuyên sâu về hệ sinh thái PHP (Laravel, Yii2) và kiến trúc SaaS mở rộng. Có thành tích đã được chứng minh trong việc dẫn dắt các nhóm kỹ thuật, thiết kế các hệ thống multi-tenant và cung cấp các nền tảng tuyển dụng, CRM, HRM và thương mại điện tử cho khách hàng Nhật Bản và toàn cầu. Nền tảng backend vững chắc về PHP, có thêm kinh nghiệm thực tế với Python và Golang cho các dịch vụ hiệu suất cao và tích hợp AI. Kinh nghiệm triển khai nền tảng đám mây (AWS), containerization, và các hệ thống backend chịu tải cao.",
  expertise: {
    primary: {
      title: "Chuyên Môn Chính",
      items: [
        "PHP: Laravel, Yii2, kiến trúc hệ thống, modular monolith, thiết kế API",
        "Thiết kế SaaS Multi-tenant",
        "Kiến trúc nền tảng CRM / HRM / Tuyển dụng",
        "Tối ưu MySQL, Redis caching",
        "Triển khai Docker, AWS ECS",
        "Tinh chỉnh hiệu năng Backend"
      ]
    },
    secondary: {
      title: "Kỹ Năng Phụ",
      items: [
        "Python: Django, Flask (Tích hợp AI, service layer)",
        "PostgreSQL (Bao gồm Vector), Elasticsearch"
      ]
    }
  },
  experience: [
    {
      title: "Technical Manager / Project Manager @ Lisod Vietnam",
      date: "12/2024 - Hiện tại",
      description: "Dẫn dắt định hướng kỹ thuật cho các sản phẩm SaaS tuyển dụng hướng tới thị trường Nhật Bản. Thiết kế hệ sinh thái tuyển dụng multi-tenant sử dụng core backend Laravel, kiến trúc API dễ mở rộng.",
      highlights: [
        "Xây dựng hệ thống chấm điểm CV sử dụng phương pháp RAG.",
        "Triển khai lớp service AI bằng Python tích hợp với hệ thống lõi PHP."
      ]
    },
    {
      title: "Python / Golang / PHP Fullstack Developer @ BorderZ Vietnam",
      date: "05/2023 - 12/2024",
      description: "Làm việc qua nhiều nhóm sản phẩm cung cấp các hệ thống thương mại điện tử và nền tảng đánh giá.",
      highlights: [
        "Dẫn dắt phát triển backend cho Nền tảng Đánh giá sử dụng Laravel.",
        "Thiết kế service backend và triển khai AWS ECS cho PMS Deepwork.",
        "Phát triển RESTful APIs bằng Golang cho hệ thống Đặt đồ ăn NONPI chịu tải cao."
      ]
    },
    {
      title: "Project Manager / Fullstack Developer @ Freelance",
      date: "10/2022 - Hiện tại",
      description: "Hoàn thiện và bàn giao nhiều hệ thống thực tế xây dựng chủ yếu bằng Laravel.",
      highlights: [
        "Thiết kế hệ thống CRM vòng đời bán hàng và kho cho ARN.",
        "Xây dựng module quản lý ứng viên và kết nối việc làm cho nền tảng ViecViet.",
        "Thiết kế indexing tài liệu sử dụng Elasticsearch cho nền tảng giáo dục Sharedocs."
      ]
    },
    {
      title: "Team Lead / Project Manager @ Zinza Technology",
      date: "04/2021 - 11/2021",
      description: "Dẫn dắt và bàn giao nhiều hệ thống nội bộ và khách hàng trong các lĩnh vực HRM, giáo dục, và quản lý bán lẻ.",
      highlights: [
        "Phát triển hệ thống quản lý chuỗi cửa hàng cho thuê Kimono (Laravel 6).",
        "Quản lý dự án HRM Toremase Cloud chạy trên hạ tầng AWS.",
        "Quản lý hệ thống nền tảng học tập video cho chuyên gia y tế."
      ]
    },
    {
      title: "PHP Backend Developer @ Proseeds",
      date: "07/2015 - 07/2019",
      description: "Phát triển các nền tảng tuyển dụng và học tập doanh nghiệp sử dụng Yii2.",
      highlights: [
        "Xây dựng các module backend dễ mở rộng.",
        "Bảo trì các hệ thống SaaS dài hạn cho khách hàng doanh nghiệp."
      ]
    }
  ],
  education: [
    {
      degree: "CNTT @ ĐH Kinh Tế Kỹ Thuật Công Nghiệp",
      date: "09/2011 - 05/2014"
    },
    {
      degree: "Khoa Học Máy Tính @ ĐH Công Nghiệp Hà Nội",
      date: "09/2017 - 05/2019"
    }
  ]
};

const dataEN = {
  title: "Fullstack Developer",
  labels: {
    contact: "Contact",
    skills: "Skills",
    about: "Objective",
    experience: "Experience",
    education: "Education",
    expertise: "Expertise"
  },
  contact: {
    "Phone": "0979372228",
    "Email": "thangtd1993@gmail.com",
    "Website": "https://thangit93.github.io",
    "Location": "Hanoi, Vietnam"
  },
  skills: [
    "PHP: Yii2, Laravel, CakePHP, Zend",
    "JS: VueJS, ReactJS, NextJS, NuxtJS",
    "Python: Flask, Django",
    "Go: Echo",
    "Database: MySQL, PostgreSQL, Redis, Elasticsearch",
    "DevOps: CI/CD, Docker, AWS"
  ],
  about: "Senior Technical Leader with 9+ years of experience specializing in PHP ecosystem (Laravel, Yii2) and scalable SaaS architecture. Proven track record in leading engineering teams, designing multi-tenant systems, and delivering recruitment, CRM, HRM, and e-commerce platforms for Japanese and global clients. Strong backend foundation in PHP, with additional production experience in Python and Golang for performance-critical and AI-related services. Experienced in cloud-native deployment (AWS), containerization, and high-concurrency backend systems.",
  expertise: {
    primary: {
      title: "Primary Expertise",
      items: [
        "PHP: Laravel, Yii2, system architecture, modular monolith, API design",
        "Multi-tenant SaaS design",
        "CRM / HRM / Recruitment platform architecture",
        "MySQL optimization, Redis caching",
        "Dockerized deployment, AWS ECS",
        "Backend performance tuning"
      ]
    },
    secondary: {
      title: "Secondary & Additional",
      items: [
        "Python (Django, Flask) & Golang REST API",
        "PostgreSQL (including Vector), Elasticsearch"
      ]
    }
  },
  experience: [
    {
      title: "Technical Manager / Project Manager @ Lisod Vietnam",
      date: "12/2024 - Present",
      description: "Led technical direction for recruitment SaaS products targeting Japanese market. Designed multi-tenant ecosystem using Laravel core backend and scalable API layers.",
      highlights: [
        "Designed CV scoring system using RAG approach.",
        "Implemented AI service layer in Python integrated with PHP core."
      ]
    },
    {
      title: "Python / Golang / PHP Fullstack Developer @ BorderZ Vietnam",
      date: "05/2023 - 12/2024",
      description: "Worked across multiple product teams delivering e-commerce and marketplace systems.",
      highlights: [
        "Led backend feature development for Assessment Platform using Laravel.",
        "Deployed containerized services to AWS ECS for PMS Deepwork.",
        "Developed RESTful APIs in Golang for high-traffic food ordering system NONPI."
      ]
    },
    {
      title: "Project Manager / Fullstack Developer @ Freelance",
      date: "10/2022 - Present",
      description: "Delivered multiple production systems built primarily on Laravel.",
      highlights: [
        "Designed CRM workflow system for ARN.",
        "Built job matching modules for ViecViet recruitment.",
        "Designed document indexing using Elasticsearch for Sharedocs."
      ]
    },
    {
      title: "Team Lead / Project Manager @ Zinza Technology",
      date: "04/2021 - 11/2021",
      description: "Led and delivered multiple internal and client systems across HRM, education, and retail management domains.",
      highlights: [
        "Developed retail store management system including inventory and bookings.",
        "Managed HRM Toremase Cloud and medical education platforms."
      ]
    },
    {
      title: "PHP Backend Developer @ Proseeds",
      date: "07/2015 - 07/2019",
      description: "Developed enterprise recruitment and learning platforms using Yii2.",
      highlights: [
        "Built scalable backend modules and Redis caching.",
        "Maintained SaaS systems for enterprise clients."
      ]
    }
  ],
  education: [
    {
      degree: "IT @ University of Economics - Technology for Industries",
      date: "09/2011 - 05/2014"
    },
    {
      degree: "Computer Science @ Hanoi University of Industry",
      date: "09/2017 - 05/2019"
    }
  ]
};

const currentData = computed(() => {
  return lang.value === 'vi' ? dataVI : dataEN;
});

function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

function initTypingAnimation() {
  const elements = document.querySelectorAll('.name, .title, .section h2, .section p, .contact p, .skills li, .expertise-title, .expertise-list li, .experience-item h3, .experience-item p, .highlights li, .education p');
  let delay = 0;

  elements.forEach((el) => {
    // Reset any previous state
    el.style.animation = 'none';
    el.classList.remove('typed-text');
    el.classList.remove('is-animating');
    
    // Store original text
    const fullText = el.getAttribute('data-text') || el.textContent;
    // Set data attribute so we don't lose the text on subsequent toggles
    if (!el.getAttribute('data-text')) {
       el.setAttribute('data-text', fullText);
    }
    
    el.textContent = '';
    el.classList.add('typed-text');
    
    const textLength = fullText.length;
    let typeSpeed = 20; // ms per char

    if (el.matches('.section p') || el.matches('.experience-item p:not(.date)') || el.matches('.highlights li')) {
      typeSpeed = 10; // faster for long text
    }

    setTimeout(() => {
      let i = 0;
      // Mark as animating to reveal backgrounds/borders
      el.classList.add('is-animating');
      // enable cursor
      el.style.animation = `blink 0.75s step-end infinite`;
      
      const typeInterval = setInterval(() => {
        if (i < textLength) {
          el.textContent += fullText.charAt(i);
          i++;
        } else {
          clearInterval(typeInterval);
          el.style.borderRight = 'none'; // remove cursor when done
        }
      }, typeSpeed);
    }, delay);

    delay += (textLength * typeSpeed) + 150; // delay next element slightly
  });
}

const setLang = (newLang) => {
  lang.value = newLang;
  nextTick(() => {
    initTypingAnimation();
  });
};

onMounted(() => {
  initTypingAnimation();
});
</script>

<style scoped>
.language-switcher {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
}
.language-switcher button {
  background: none;
  border: none;
  font-family: monospace;
  font-size: 1.2rem;
  color: #555;
  cursor: pointer;
  padding: 0 5px;
}
.language-switcher button.active {
  color: var(--primary-color, #0f0);
  font-weight: bold;
}
.language-switcher span {
  color: #555;
}

.title {
  color: var(--primary-color, #0f0);
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: monospace;
}

.expertise-title {
  color: #fff;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-family: monospace;
}

.expertise-list {
  padding-left: 20px;
  margin-bottom: 1rem;
}
.expertise-list li {
  color: #bbb;
  margin-bottom: 5px;
}

.highlights {
  padding-left: 20px;
  margin-top: 5px;
}
.highlights li {
  color: #aaa;
  font-size: 0.9em;
  margin-bottom: 3px;
}

.education-item {
  margin-bottom: 1rem;
}

a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  color: var(--primary-color, #0f0);
}
</style>
