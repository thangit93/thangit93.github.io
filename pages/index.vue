<template>
    <div class="container">
      <div class="row">
        <!-- Sidebar -->
        <div class="col-lg-4 sidebar">
          <img src="~/assets/images/avatar.webp" alt="Thang Tran" class="profile-img">
          <div class="name">{{ name }}</div>
          <div class="section contact">
            <h2>// Liên hệ</h2>
            <p v-for="(item, index) in contact" :key="index">{{ index }}: {{ item }}</p>
          </div>
          <div class="section skills">
            <h2>// Kỹ năng</h2>
            <ul>
              <li v-for="skill in skills" :key="skill">{{ skill }}</li>
            </ul>
          </div>
        </div>
        <!-- Main Content -->
        <div class="col-lg-8 main">
          <div class="section">
            <h2>// Giới thiệu</h2>
            <p>{{ about }}</p>
          </div>
          <div class="section">
            <h2>// Kinh nghiệm</h2>
            <div class="experience-item" v-for="exp in experience" :key="exp.title">
              <h3>{{ exp.title }}</h3>
              <p class="date">{{ exp.date }}</p>
              <p>{{ exp.description }}</p>
            </div>
          </div>
          <div class="section education">
            <h2>// Học vấn</h2>
            <p>{{ education.degree }}</p>
            <p class="date">{{ education.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  const name = "Trần Đức Thắng";
  const contact = {
    "Email": "thangtd1993@gmail.com",
    "Phone": "0979372228",
    "Github": "https://github.com/thangit93",
    "Location": "Hanoi, VN"
  };
  const skills = ["Laravel", "VueJS", "PHP", "Nodejs", "Python", "Go", "Git", "Docker", "Tensorflow", "AWS"];
  const about = "Tôi là 1 Fullstack Developer với hơn 10 năm kinh nghiệm trong lĩnh vực phát triển phần mềm và từng đảm nhận các vai trò quan trọng trong các công ty từng hoạt động: Project Manager, Technical Manager, Senior Fullstack Developer. Ngoài công việc tôi còn có đam mê nghiên cứu các loại công nghệ mới trong lĩnh vực AI";
  const experience = [
    {
      title: "Technical Manager @ LISOD Vietnam",
      date: "12/2024 - Present",
      description: "Xây dựng và đề xuất các phương án kỹ thuật cho các dự án, kiểm soát và đảm bảo chất lượng kỹ thuật các sản phẩm trước khi đưa lên môi trường production. Ngoài ra tôi còn tham gia nghiên cứu các công nghệ mới về AI LLM"
    },
    {
      title: "Founder & Fullstack Developer @ Vietek Solutions",
      date: "03/2022 - Present",
      description: "Xây dựng và phát triển các sản phẩm phần mềm chất lượng cao cho các khách hàng cá nhân và doanh nghiệp, đồng thời vận hành các sản phẩm liên quan đến lĩnh vực giáo dục và thương mại điện tử"
    },
    {
      title: "Senior Software Engineer @ BORDER Z VIETNAM",
      date: "11/2022 - 12/2024",
      description: "Đưa ra các giải pháp kỹ thuật và phát triển các sản phẩm phầm mềm cho các khách hàng tại thị trường Nhật Bản"
    },
    {
      title: "Project Manager - Team Lead @ Zinza Technology",
      date: "07/2018 - 11/2021",
      description: "Quản lý và đảm bảo chất lượng và tiến độ dự án. Nghiên cứu xây dựng các giải pháp công nghệ mới để ứng dụng vào quy trình phát triển phần mềm"
    },
    {
      title: "Fullstack Developer @ AnVui",
      date: "12/2017 - 07/2018",
      description: "Tham gia phát triên sản phẩm phần mềm quản lý nhà xe cho các khách hàng trong lĩnh vực vận tải đường bộ"
    },
    {
      title: "Fullstack Developer @ Mgreeny",
      date: "04/2015 - 11/2017",
      description: "Tham gia phát triên 2 sản phẩm phần mềm cho thị trường Nhật Bản bảo gồm: Hệ thống quản lý giáo dục và hệ thống hỗ trợ tuyển dụng"
    },
  ];
  const education = {
    degree: "Cử nhân CNTT @ ĐH Công nghiệp HN",
    date: "2011 - 2015"
  };
  
  onMounted(() => {
    const elements = document.querySelectorAll('.name, .section h2, .section p, .contact p, .skills li, .experience-item h3, .experience-item p, .education p');
    let delay = 0;
  
    elements.forEach((el) => {
      el.classList.add('typed-text');
      const textLength = el.textContent.length;
      let animationDuration;
  
      if (el.matches('.section p') || el.matches('.experience-item p:not(.date)')) {
        animationDuration = Math.max(0.5, textLength / 100); // Nhanh cho giới thiệu và mô tả
      } else {
        animationDuration = Math.max(1, textLength / 20); // Tốc độ gốc cho phần khác
      }
  
      el.style.width = '0';
      setTimeout(() => {
        el.style.visibility = 'visible';
        el.style.animation = `typing ${animationDuration}s steps(${textLength}, end) forwards, blink 0.75s step-end infinite`;
      }, delay * 1000);
  
      el.addEventListener('animationend', (event) => {
        if (event.animationName === 'typing') {
          el.style.borderRight = 'none';
        }
      });
  
      delay += animationDuration * 0.5;
    });
  });
  </script>