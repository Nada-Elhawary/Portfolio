export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Training",
      contact: "Contact",
      hireMe: "Hire Me"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Nada Elhawary",
      role: "Junior Front-End Developer",
      intro: "Building responsive, modern, and user-focused web interfaces with Angular and React. I care about clean code, smooth user experiences, and turning ideas into real products.",
      ctaProjects: "View My Projects",
      ctaContact: "Contact Me",
      ctaDownloadCV: "Download CV"
    },
    about: {
      title: "About Me",
      subtitle: "I am a Junior Front-End Developer focused on building modern, responsive web interfaces with Angular and React. I enjoy crafting clean, component-based UIs and integrating with APIs to deliver real, usable products.",
      journeyTitle: "My Journey",
      journeySubTitle: "From curiosity to code.",
      journeyText1: "My path into web development started with curiosity and grew through hands-on learning, practical projects, and intensive training. I focus primarily on Front-End Development — building the interfaces people see and interact with every day.",
      journeyText2: "Through my ITI training I also gained additional full-stack knowledge, which helps me understand how complete applications work and how to integrate effectively with backend APIs.",
      journey: {
        title: "My Journey",
        tagline: "From curiosity to code.",
        supporting: "A journey that started with one small step — and is still going.",
        milestones: [
          {
            year: "2021",
            title: "The Beginning",
            description: "These were my first steps into the world of technology, where I started discovering programming and web development."
          },
          {
            year: "2023",
            title: "Learning to Think",
            description: "Through problem-solving and programming challenges, I began to understand that programming is not just about writing code, but about learning how to approach problems and find solutions."
          },
          {
            year: "2024",
            title: "Finding My Path",
            description: "My interest in front-end development grew stronger as I explored Angular and modern web development tools, and I started building my first real interfaces."
          },
          {
            year: "2025",
            title: "Taking Bigger Steps",
            description: "I graduated from the Faculty of Computers & Information while continuing to build projects and strengthen my front-end skills by turning what I learned into something real."
          },
          {
            year: "2026",
            title: "ITI — Intensive Training",
            description: "ITI became one of the most important milestones in my journey. During six months of intensive learning and teamwork, I deepened my front-end expertise in Angular and React, and also expanded my knowledge into backend development and AI.",
            highlight: "ITI"
          },
          {
            year: "Today",
            title: "Still Building",
            description: "Today, I am at the beginning of a new chapter, growing as a Front-End Developer, constantly learning, building new projects, and turning ideas into experiences people can actually use.",
            closing: "My journey isn't over.\nI'm just writing the next chapter.",
            isCurrent: true
          }
        ]
      },
      stats: [
        { value: "5+", label: "Years Learning" },
        { value: "10+", label: "Projects Built" },
        { value: "8+", label: "Technologies" }
      ],
      highlights: [
        { title: "Front-End", desc: "Angular, React, TypeScript, JavaScript, HTML5, CSS3" },
        { title: "Styling & UI", desc: "Tailwind CSS, SCSS, Responsive Design, Component Libraries" },
        { title: "Integration", desc: "REST APIs, Git, GitHub, Authentication Flows" }
      ]
    },
    skills: {
      title: "Technical Skills",
      subtitle: "A focused set of front-end technologies and tools I use to build modern, responsive, and accessible web interfaces.",
      supportingLabel: "Additional",
      categories: {
        frontend: "Front-End",
        styling: "Styling & UI",
        integration: "APIs & Tools",
        backend: "Back-End Knowledge"
      }
    },
    projects: {
      title: "Selected Projects",
      subtitle: "A selection of front-end projects I have built — featuring responsive interfaces, reusable components, API integration, and real-world user flows.",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      items: [
        {
          title: "EduGenie — E-Learning Platform",
          description: "Contributed to the Angular front end of an AI-powered e-learning platform. Built the admin dashboard, course approval flows, category management, and instructor profile pages. Implemented role-based UI, reusable components, authentication flows, and API integration using Angular 20 and TypeScript.",
          tech: ["Angular 20", "TypeScript", "RxJS", "REST APIs", "NestJS", "MongoDB"]
        },
        {
          title: "NexusBooks — Book Rental Platform",
          description: "Built a responsive book rental platform with Angular and Next.js front ends. Implemented book browsing, search, user authentication UI, rental management flows, and an admin dashboard. Integrated with a REST API backend.",
          tech: ["Next.js", "Angular", "TypeScript", "REST APIs", "Node.js", "MongoDB"]
        },
        {
          title: "Movies App",
          description: "Responsive movie discovery app built with React and Redux Toolkit. Features TMDB API integration for trending movies, search, paginated browsing, detailed movie pages with trailers and streaming providers, and a favorites watchlist persisted to localStorage.",
          tech: ["React", "Redux Toolkit", "JavaScript", "TMDB API", "Bootstrap", "Framer Motion"]
        },
        {
          title: "Ada Store — E-Commerce UI",
          description: "Developed a modern e-commerce front end with Angular 20. Features include product browsing and filtering, responsive layout, user authentication, shopping cart UI, and state management using Angular Signals.",
          tech: ["Angular 20", "TypeScript", "Tailwind CSS", "Angular Signals", "REST APIs"]
        },
        {
          title: "Garden Battle Game",
          description: "Interactive 2-player browser game built with HTML, CSS, and vanilla JavaScript. Features DOM-based rendering, a requestAnimationFrame game loop, two game modes (Player vs Bot / Player vs Player), power-ups, collision detection, a simple bot AI, and high score persistence.",
          tech: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation", "Game Logic", "ES6 Modules"]
        }
      ]
    },
    experience: {
      title: "Education & Training",
      servicesTitle: "Services",
      items: [
        {
          role: "B.Sc. in Computer Science",
          company: "Faculty of Computers & Information, South Valley University",
          period: "2021 – 2025 | Qena, Egypt",
          description: "Grade: Very Good | Graduation Project: A+"
        },
        {
          role: "ITI 6-Month Intensive Code Camp — Full-Stack Web & Generative AI Development using MEARN",
          company: "Information Technology Institute (ITI)",
          period: "01/2026 – 06/2026 | Qena, Egypt",
          description: "Intensive training covering Angular, React, TypeScript, JavaScript, Node.js, Express.js, MongoDB, REST APIs, and Generative AI. Worked on real-world team projects including EduGenie, a full-stack e-learning platform."
        },
        {
          role: "Front-End Development Summer Training",
          company: "Information Technology Institute (ITI)",
          period: "08/2023 – 09/2023 | Qena, Egypt",
          description: "Covered: HTML5, CSS3, Responsive Web Design, Bootstrap 5, JavaScript, TypeScript, Angular, and Flutter fundamentals."
        }
      ],
      services: [
        { title: "Front-End Development", desc: "Building responsive, modern, and accessible web interfaces using Angular and React." },
        { title: "Responsive UI Design", desc: "Pixel-perfect, fluid layouts that work seamlessly across all screen sizes and devices." },
        { title: "Component Architecture", desc: "Clean, reusable component structures following best practices for maintainable front-end code." },
        { title: "API Integration", desc: "Connecting front-end applications to REST APIs with proper authentication and state handling." },
        { title: "Angular Applications", desc: "Feature-rich Angular apps with routing, forms, RxJS, and role-based user interfaces." },
        { title: "React Applications", desc: "Modern React applications using hooks, context, and clean component-based architecture." }
      ]
    },
    testimonials: {
      title: "Client Feedback",
      subtitle: "Don't just take my word for it. Here is what people have to say about my work.",
      items: [
        {
          name: "Sarah Jenkins",
          role: "CEO @ TechStart",
          content: "The attention to detail in the UI and the clean component structure made our product look and feel professional from day one. Highly recommended."
        },
        {
          name: "Marcus Chen",
          role: "Product Manager @ Innovate.io",
          content: "The attention to detail in the UI and the smooth interactions completely transformed our user experience. Delivers clean, maintainable code on time."
        },
        {
          name: "Elena Rodriguez",
          role: "Founder @ DesignSpace",
          content: "Bridging the gap between design and development is rare, but they nailed it. The interface is pixel-perfect and runs incredibly fast."
        }
      ]
    },
    contact: {
      title: "Let's Connect",
      subtitle: "I am open to Junior Front-End Developer opportunities — Angular, React, or both. Feel free to reach out.",
      getInTouch: "Get in Touch",
      description: "I am currently looking for junior front-end roles and open to remote or on-site opportunities. Whether you have a project, a question, or just want to say hi — I would love to hear from you.",
      labels: {
        name: "Name",
        email: "Email",
        message: "Message"
      },
      placeholders: {
        name: "John Doe",
        email: "john@example.com",
        message: "Tell me about your project or opportunity..."
      },
      submit: "Send Message",
      sending: "Sending..."
    },
    footer: {
      copyright: "All rights reserved. Built with React & Framer Motion.",
      links: {
        home: "Home",
        projects: "Projects",
        contact: "Contact"
      }
    }
  },

  ar: {
    nav: {
      about: "عني",
      skills: "مهاراتي",
      projects: "مشاريعي",
      experience: "تدريبي",
      contact: "اتصل بي",
      hireMe: "وظفني"
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "ندى الهواري",
      role: "مطورة واجهات أمامية",
      intro: "أبني واجهات ويب حديثة ومتجاوبة تركز على تجربة المستخدم باستخدام Angular وReact. أهتم بكتابة كود نظيف وتجارب مستخدم سلسة وتحويل الأفكار إلى منتجات حقيقية.",
      ctaProjects: "عرض مشاريعي",
      ctaContact: "تواصل معي",
      ctaDownloadCV: "تحميل السيرة الذاتية"
    },
    about: {
      title: "من أنا",
      subtitle: "أنا مطورة واجهات أمامية (Junior Front-End Developer) متخصصة في بناء واجهات ويب حديثة ومتجاوبة باستخدام Angular وReact. أركز على كتابة كود نظيف ومكونات قابلة لإعادة الاستخدام وتكامل الـ APIs لتقديم منتجات حقيقية وقابلة للاستخدام.",
      journeyTitle: "مسيرتي",
      journeyText1: "بدأ طريقي في تطوير الويب بفضول ونما من خلال التعلم العملي والمشاريع الحقيقية والتدريب المكثف. تركيزي الأساسي على تطوير الواجهات الأمامية — بناء الواجهات التي يراها المستخدمون ويتفاعلون معها يومياً.",
      journeyText2: "من خلال تدريبي في ITI اكتسبت أيضاً معرفة إضافية بتطوير الـ Back-End، مما يساعدني على فهم كيفية عمل التطبيقات الكاملة والتكامل الفعّال مع الـ APIs.",
      journey: {
        title: "رحلتي",
        tagline: "من الفضول إلى الكود.",
        supporting: "رحلة بدأت بخطوة صغيرة، وما زالت مستمرة.",
        milestones: [
          {
            year: "2021",
            title: "البداية",
            description: "كانت أول خطواتي في عالم التكنولوجيا، ومن هنا بدأت أكتشف عالم البرمجة وتطوير الويب."
          },
          {
            year: "2023",
            title: "تعلُّم طريقة التفكير",
            description: "مع الـProblem Solving والتحديات البرمجية، بدأت أفهم أن البرمجة ليست مجرد كتابة كود، بل طريقة مختلفة للتفكير في المشكلات وحلها."
          },
          {
            year: "2024",
            title: "اكتشاف طريقي",
            description: "بدأ اهتمامي بتطوير الواجهات الأمامية يكبر، وبدأت أتعمق أكثر في Angular وأدوات تطوير الويب الحديثة، وبنيت أولى واجهاتي الحقيقية."
          },
          {
            year: "2025",
            title: "خطوات أكبر",
            description: "تخرجت من كلية الحاسبات والمعلومات، وفي نفس الوقت واصلت تطوير مهاراتي في الواجهات الأمامية وبناء مشاريع تساعدني على تحويل ما أتعلمه إلى شيء حقيقي."
          },
          {
            year: "2026",
            title: "ITI — التدريب المكثف",
            description: "كانت ITI واحدة من أهم محطات رحلتي. خلال ستة أشهر من التعلم والعمل الجماعي، عمّقت خبرتي في Angular وReact، وتوسعت معرفتي أيضاً في الـ Back-End والـ AI.",
            highlight: "ITI"
          },
          {
            year: "اليوم",
            title: "ما زلت أبني",
            description: "اليوم أنا في بداية مرحلة جديدة، أنمو كمطورة واجهات أمامية، وأتعلم باستمرار، وأبني مشاريع جديدة، وأحوّل الأفكار إلى تجارب حقيقية يمكن للناس استخدامها.",
            closing: "رحلتي لم تنتهِ بعد...\nأنا فقط أكتب فصلها القادم.",
            isCurrent: true
          }
        ]
      },
      stats: [
        { value: "5+", label: "سنوات تعلم وتطوير" },
        { value: "10+", label: "مشاريع منجزة" },
        { value: "8+", label: "تقنيات أتقنها" }
      ],
      highlights: [
        { title: "الواجهات الأمامية", desc: "Angular، React، TypeScript، JavaScript، HTML5، CSS3" },
        { title: "التصميم والـ UI", desc: "Tailwind CSS، SCSS، تصميم متجاوب، مكتبات المكونات" },
        { title: "التكامل والأدوات", desc: "REST APIs، Git، GitHub، تدفقات المصادقة" }
      ]
    },
    skills: {
      title: "المهارات التقنية",
      subtitle: "مجموعة مركزة من تقنيات وأدوات الواجهات الأمامية التي أستخدمها لبناء واجهات ويب حديثة ومتجاوبة.",
      supportingLabel: "إضافية",
      categories: {
        frontend: "الواجهات الأمامية",
        styling: "التصميم والـ UI",
        integration: "APIs والأدوات",
        backend: "معرفة الـ Back-End"
      }
    },
    projects: {
      title: "مشاريع مختارة",
      subtitle: "مجموعة من مشاريع الواجهات الأمامية التي بنيتها — تتضمن واجهات متجاوبة، مكونات قابلة لإعادة الاستخدام، تكامل مع APIs، وتدفقات مستخدم حقيقية.",
      liveDemo: "عرض مباشر",
      sourceCode: "كود المشروع",
      items: [
        {
          title: "EduGenie — منصة التعلم الإلكتروني",
          description: "ساهمت في بناء الواجهة الأمامية بـ Angular لمنصة تعليم إلكتروني مدعومة بالذكاء الاصطناعي. بنيت لوحة تحكم المشرف، تدفقات اعتماد الكورسات، إدارة الفئات، وصفحات ملف المدرس. طبّقت واجهات مستخدم قائمة على الأدوار، مكونات قابلة لإعادة الاستخدام، تدفقات المصادقة، وتكامل API باستخدام Angular 20 وTypeScript.",
          tech: ["Angular 20", "TypeScript", "RxJS", "REST APIs", "NestJS", "MongoDB"]
        },
        {
          title: "NexusBooks — منصة تأجير الكتب",
          description: "بنيت منصة متجاوبة لتأجير الكتب بواجهة أمامية بـ Angular وNext.js. طبّقت تصفح الكتب والبحث وواجهة مصادقة المستخدم وتدفقات إدارة الإيجارات ولوحة تحكم المشرف. مع تكامل مع REST API.",
          tech: ["Next.js", "Angular", "TypeScript", "REST APIs", "Node.js", "MongoDB"]
        },
        {
          title: "تطبيق الأفلام",
          description: "تطبيق استكشاف أفلام متجاوب مبني بـ React وRedux Toolkit. يتضمن تكامل TMDB API لعرض الأفلام الرائجة والبحث والتصفح بالصفحات وصفحات تفاصيل الأفلام مع المقاطع الدعائية ومزودي البث، وقائمة مفضلة محفوظة في localStorage.",
          tech: ["React", "Redux Toolkit", "JavaScript", "TMDB API", "Bootstrap", "Framer Motion"]
        },
        {
          title: "Ada Store — واجهة المتجر الإلكتروني",
          description: "طوّرت واجهة أمامية حديثة لمتجر إلكتروني بـ Angular 20. تتضمن تصفح وتصفية المنتجات، تخطيط متجاوب، مصادقة المستخدم، واجهة سلة التسوق، وإدارة الحالة بـ Angular Signals.",
          tech: ["Angular 20", "TypeScript", "Tailwind CSS", "Angular Signals", "REST APIs"]
        },
        {
          title: "Garden Battle — لعبة المتصفح",
          description: "لعبة متصفح تفاعلية لاعبان مبنية بـ HTML وCSS وJavaScript الخالص. تتضمن رسوماً قائمة على DOM وحلقة لعبة بـ requestAnimationFrame ووضعين للعب (لاعب ضد بوت / لاعب ضد لاعب) وعناصر power-up وكشف التصادم وبوت بذكاء اصطناعي بسيط وحفظ أعلى نتيجة.",
          tech: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation", "Game Logic", "ES6 Modules"]
        }
      ]
    },
    experience: {
      title: "التعليم والتدريب",
      servicesTitle: "الخدمات",
      items: [
        {
          role: "بكالوريوس علوم الحاسب",
          company: "كلية الحاسبات والمعلومات، جامعة جنوب الوادي",
          period: "2021 – 2025 | قنا، مصر",
          description: "التقدير التراكمي: جيد جدًا | مشروع التخرج: A+"
        },
        {
          role: "ITI — برنامج التدريب المكثف: تطوير الويب Full-Stack والذكاء الاصطناعي التوليدي باستخدام MEARN",
          company: "معهد تكنولوجيا المعلومات (ITI)",
          period: "01/2026 – 06/2026 | قنا، مصر",
          description: "تدريب مكثف شمل: Angular، React، TypeScript، JavaScript، Node.js، Express.js، MongoDB، REST APIs، والذكاء الاصطناعي التوليدي. العمل على مشاريع فريقية حقيقية، أبرزها EduGenie — منصة تعليم إلكتروني متكاملة."
        },
        {
          role: "التدريب الصيفي في تطوير Front-End",
          company: "معهد تكنولوجيا المعلومات (ITI)",
          period: "08/2023 – 09/2023 | قنا، مصر",
          description: "شمل التدريب: HTML5، CSS3، تصميم الويب المتجاوب، Bootstrap 5، JavaScript، TypeScript، Angular، وأساسيات Flutter."
        }
      ],
      services: [
        { title: "تطوير الواجهات الأمامية", desc: "بناء واجهات ويب حديثة ومتجاوبة وسهلة الوصول باستخدام Angular وReact." },
        { title: "تصميم UI متجاوب", desc: "تخطيطات دقيقة وسلسة تعمل بشكل مثالي على جميع أحجام الشاشات والأجهزة." },
        { title: "هندسة المكونات", desc: "بنية مكونات نظيفة وقابلة لإعادة الاستخدام تتبع أفضل الممارسات في الكود الأمامي القابل للصيانة." },
        { title: "تكامل الـ APIs", desc: "ربط تطبيقات الواجهة الأمامية بـ REST APIs مع معالجة المصادقة وإدارة الحالة." },
        { title: "تطبيقات Angular", desc: "تطبيقات Angular متكاملة مع التوجيه والنماذج وRxJS وواجهات مستخدم قائمة على الأدوار." },
        { title: "تطبيقات React", desc: "تطبيقات React حديثة باستخدام Hooks وContext وهندسة مكونات نظيفة." }
      ]
    },
    testimonials: {
      title: "آراء العملاء",
      subtitle: "إليك ما يقوله الآخرون عن عملي.",
      items: [
        {
          name: "سارة جينكينز",
          role: "الرئيس التنفيذي لشركة TechStart",
          content: "الاهتمام بالتفاصيل في واجهة المستخدم وبنية المكونات النظيفة جعل منتجنا يبدو ويشعر احترافياً من اليوم الأول. موصى بها بشدة."
        },
        {
          name: "ماركوس تشين",
          role: "مدير المنتجات في Innovate.io",
          content: "الاهتمام البالغ بالتفاصيل في واجهة المستخدم والتفاعلات السلسة غيّر تماماً تجربة مستخدمينا. تقدم كودًا نظيفاً وقابلاً للصيانة في الوقت المحدد."
        },
        {
          name: "إيلينا رودريغيز",
          role: "مؤسسة DesignSpace",
          content: "سد الفجوة بين التصميم والتطوير أمر نادر الحدوث، لكنها أنجزت ذلك ببراعة. الواجهة متطابقة تماماً وتعمل بسرعة فائقة."
        }
      ]
    },
    contact: {
      title: "لنتواصل",
      subtitle: "أنا منفتحة على فرص مطورة واجهات أمامية — Angular أو React أو كليهما. لا تتردد في التواصل.",
      getInTouch: "تواصل معي مباشرة",
      description: "أبحث حالياً عن وظائف في تطوير الواجهات الأمامية، ومنفتحة على الفرص عن بُعد أو في الموقع. سواء كان لديك مشروع أو سؤال أو تريد فقط التعرف — يسعدني سماعك.",
      labels: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة"
      },
      placeholders: {
        name: "اسمك الكريم",
        email: "your.name@example.com",
        message: "أخبرني عن مشروعك أو الفرصة المتاحة..."
      },
      submit: "إرسال الرسالة",
      sending: "جارٍ الإرسال..."
    },
    footer: {
      copyright: "جميع الحقوق محفوظة. تم التطوير بكل حب باستخدام React و Framer Motion.",
      links: {
        home: "الرئيسية",
        projects: "مشاريعي",
        contact: "اتصل بي"
      }
    }
  }
};
