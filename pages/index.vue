<template>
    <div class="container">
      <div class="row">
        <!-- Sidebar -->
        <div class="col-lg-4 sidebar">
          <img src="https://picsum.photos/100" alt="Profile Image" class="profile-img">
          <div class="name">{{ name }}</div>
          <div class="section contact">
            <h2>// Liên hệ</h2>
            <p v-for="item in contact" :key="item">{{ item }}</p>
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
  
  const name = "Nguyen Van A";
  const contact = [
    "email: nguyen.van.a@example.com",
    "phone: 0123 456 789",
    "github: github.com/nguyenvana",
    "location: Hanoi, VN"
  ];
  const skills = ["JavaScript", "React.js", "Node.js", "Python", "Git", "Docker"];
  const about = "Full-stack developer với hơn 5 năm kinh nghiệm, đam mê viết code sạch và tối ưu hóa hệ thống. Thích giải quyết vấn đề và học công nghệ mới.";
  const experience = [
    {
      title: "Senior Developer @ TechCorp",
      date: "06/2020 - Present",
      description: "Xây dựng API RESTful với Node.js, triển khai ứng dụng React, tối ưu hiệu suất hệ thống giảm 30% thời gian tải."
    },
    {
      title: "Junior Developer @ StartupX",
      date: "01/2019 - 05/2020",
      description: "Tham gia phát triển MVP, tích hợp CI/CD với GitHub Actions, hỗ trợ debug và deploy."
    }
  ];
  const education = {
    degree: "Cử nhân CNTT @ ĐH Bách Khoa HN",
    date: "2015 - 2019"
  };
  
  onMounted(() => {
    const elements = document.querySelectorAll('.name, .section h2, .section p, .contact p, .skills li, .experience-item h3, .experience-item p, .education p');
    let delay = 0;
  
    elements.forEach((el) => {
      el.classList.add('typed-text');
      const textLength = el.textContent.length;
      let animationDuration;
  
      if (el.matches('.section p') || el.matches('.experience-item p:not(.date)')) {
        animationDuration = Math.max(0.5, textLength / 30); // Nhanh cho giới thiệu và mô tả
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