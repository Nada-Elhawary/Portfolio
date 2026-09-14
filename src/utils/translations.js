export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      hireMe: "Hire Me"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Nada Elhawary",
      role: "Full Stack MEARN Developer",
      intro: "Crafting elegant, high-performance web applications with a focus on modern UI/UX and scalable backend architectures. I turn complex problems into beautiful digital solutions.",
      ctaProjects: "View Projects",
      ctaContact: "Contact Me",
      ctaDownloadCV: "Download CV"
    },
    about: {
      title: "About Me",
      subtitle: "I am a passionate Junior Full Stack Developer specializing in the MERN stack. I build robust, scalable architectures and design pixel-perfect, engaging user interfaces.",
      journeyTitle: "My Journey",
      journeySubTitle: "From curiosity to code.",
      journeyText1: "With a deep-rooted passion for software engineering, I've spent over 3 years perfecting the art of building full-scale web applications. My expertise lies in bridging the gap between design and complex backend systems, creating seamless digital experiences.",
      journeyText2: "I thrive in high-paced environments, architecting solutions that scale to millions of users while maintaining clean, maintainable codebases using modern technologies like TypeScript and Next.js.",
      journey: {
        title: "My Journey",
        tagline: "From curiosity to code.",
        supporting: "A journey that started with a small step, and continues to unfold.",
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
            description: "My interest in web development started to grow, and I began exploring frontend development more deeply, learning Angular and modern web development tools."
          },
          {
            year: "2025",
            title: "Taking Bigger Steps",
            description: "I graduated from the Faculty of Computers & Information while continuing to develop my skills and build projects that helped me turn what I learned into something real."
          },
          {
            year: "2026",
            title: "From Frontend to Full-Stack",
            description: "ITI became one of the most important milestones in my journey. During six months of intensive learning and teamwork, I experienced an environment closer to real-world development and expanded my knowledge from frontend to backend and AI.",
            highlight: "ITI"
          },
          {
            year: "Today",
            title: "Still Building",
            description: "Today, I'm at the beginning of a new chapter, continuing to grow as a Full-Stack Web Developer, constantly learning, building new projects, and turning ideas into experiences people can actually use.",
            closing: "My journey isn't over...\nI'm just writing the next chapter.",
            isCurrent: true
          }
        ]
      },
      stats: [
        { value: "3+", label: "Years Experience" },
        { value: "15+", label: "Projects Completed" },
        { value: "10+", label: "Tech Mastered" }
      ],
      highlights: [
        { title: "Frontend", desc: "React, Next.js, Angular, TypeScript, JavaScript" },
        { title: "Backend", desc: "Node.js, Express.js, Nest.js, GraphQL" },
        { title: "Database", desc: "MongoDB, MongoDB Atlas" }
      ]
    },
    skills: {
      title: "Technical Arsenal",
      subtitle: "A comprehensive suite of modern technologies and tools I utilize to craft premium digital experiences and scalable infrastructure.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        tools: "Tools & DevOps"
      }
    },
    projects: {
      title: "Selected Works",
      subtitle: "A showcase of premium applications I've built, demonstrating high-end UI/UX design fused with robust backend architectures.",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      items: [
        {
          title: "EduGenie",
          description: "AI-powered e-learning platform offering personalized learning, course management, quizzes, progress tracking, and AI-powered features. Built as a full-stack team project.",
          tech: ["Angular 20", "Next.js", "NestJS", "MongoDB", "AI/RAG"]
        },
        {
          title: "NexusBooks",
          description: "A modern book rental platform for discovering, renting, and managing books, with user authentication and an admin dashboard. Built as a full-stack project.",
          tech: ["Next.js", "Express.js", "Node.js", "MongoDB"]
        },
        {
          title: "Ada Store — E-Commerce",
          description: "A modern e-commerce frontend built with Angular, featuring product browsing, search, authentication, and a responsive shopping experience.",
          tech: ["Angular 20", "Tailwind CSS", "Angular Signals"]
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
          description: ""
        },
        {
          role: "Intensive Training Program — Full-Stack Web & Generative AI Development using MEARN",
          company: "Information Technology Institute (ITI)",
          period: "01/2026 – 06/2026 | Qena, Egypt",
          description: "Covered: Full-Stack Web Development, MongoDB, Express.js, Angular, React, Node.js, JavaScript, TypeScript, REST APIs, Generative AI, and real-world web projects."
        },
        {
          role: "Front-End Development Summer Training",
          company: "Information Technology Institute (ITI)",
          period: "08/2023 – 09/2023 | Qena, Egypt",
          description: "Covered: HTML5, CSS3, Responsive Web Design, Bootstrap 5, JavaScript, TypeScript, Angular, and Flutter fundamentals."
        }
      ],
      services: [
        { title: "Full Stack Web Dev", desc: "End-to-end development using the MERN stack with scalable architectures." },
        { title: "Responsive UI Dev", desc: "Pixel-perfect, modern, and fluid interfaces that look stunning on any device." },
        { title: "REST & GraphQL APIs", desc: "Robust and secure backend services tailored for complex data requirements." },
        { title: "Dashboard Systems", desc: "Complex data visualization and analytics dashboards for enterprise." },
        { title: "E-commerce Dev", desc: "High-conversion online stores with secure payment gateways integration." },
        { title: "Portfolio Websites", desc: "Premium, interactive personal brands to showcase your work globally." }
      ]
    },
    testimonials: {
      title: "Client Feedback",
      subtitle: "Don't just take my word for it. Here is what industry leaders and clients have to say about my work.",
      items: [
        {
          name: "Sarah Jenkins",
          role: "CEO @ TechStart",
          content: "An absolute wizard! The dashboard they built for us not only looks stunning but handles our massive datasets with zero lag. Highly recommended for any complex MERN project."
        },
        {
          name: "Marcus Chen",
          role: "Product Manager @ Innovate.io",
          content: "The attention to detail in the UI and the smooth animations completely transformed our user experience. True professional who delivers top-tier code on time."
        },
        {
          name: "Elena Rodriguez",
          role: "Founder @ DesignSpace",
          content: "Bridging the gap between design and development is rare, but they nailed it. The website is pixel-perfect to our Figma files and runs incredibly fast."
        }
      ]
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Have a project in mind or looking to hire? Let's discuss how I can help bring your vision to life.",
      getInTouch: "Get in Touch",
      description: "I am currently available for freelance opportunities and full-time positions. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      labels: {
        name: "Name",
        email: "Email",
        message: "Message"
      },
      placeholders: {
        name: "John Doe",
        email: "john@example.com",
        message: "Tell me about your project..."
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
      experience: "خبراتي",
      contact: "اتصل بي",
      hireMe: "وظفني"
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "ندى الهواري",
      role: "مطور ويب متكامل MEARN",
      intro: "أقوم ببناء تطبيقات ويب أنيقة وعالية الأداء مع التركيز على واجهات المستخدم الحديثة وبنى الأنظمة القابلة للتوسع. أحول المشكلات المعقدة إلى حلول رقمية رائعة.",
      ctaProjects: "عرض المشاريع",
      ctaContact: "تواصل معي",
      ctaDownloadCV: "تحميل السيرة الذاتية"
    },
    about: {
      title: "من أنا",
      subtitle: "أنا مطورة ويب متكاملة MEARN شغوفة ببناء البرمجيات. أقوم بتصميم وبناء بنى تحتية برمجية قوية وقابلة للتوسع، وتصميم واجهات مستخدم تفاعلية بدقة متناهية.",
      journeyTitle: "مسيرتي المهنية",
      journeyText1: "مع شغف عميق بهندسة البرمجيات، قضيت أكثر من 3 سنوات في إتقان بناء تطبيقات الويب المتكاملة. تكمن خبرتي في سد الفجوة بين التصميم والأنظمة الخلفية المعقدة، وتقديم تجارب رقمية سلسة وممتازة.",
      journeyText2: "أتميز بالعمل في البيئات السريعة والنشطة، حيث أقوم بابتكار وتصميم حلول برمجية تتوسع لتخدم ملايين المستخدمين مع الحفاظ على كود نظيف وقابل للصيانة باستخدام أحدث التقنيات مثل TypeScript و Next.js.",
      journey: {
        title: "My Journey",
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
            description: "بدأ اهتمامي بتطوير الويب يكبر، وبدأت أتعمق أكثر في الـFrontend وأتعلم Angular وأدوات تطوير الويب الحديثة."
          },
          {
            year: "2025",
            title: "خطوات أكبر",
            description: "تخرجت من كلية الحاسبات والمعلومات، وفي نفس الوقت واصلت تطوير مهاراتي وبناء مشاريع تساعدني على تحويل ما أتعلمه إلى شيء حقيقي."
          },
          {
            year: "2026",
            title: "من الـFrontend إلى الـFull-Stack",
            description: "كانت ITI واحدة من أهم محطات رحلتي. خلال ستة أشهر من التعلم والعمل الجماعي، خضت تجربة أقرب لبيئة العمل الحقيقية، وتوسعت معرفتي من الـFrontend إلى الـBackend والـAI.",
            highlight: "ITI"
          },
          {
            year: "اليوم",
            title: "ما زلت أبني",
            description: "اليوم أنا في بداية مرحلة جديدة، أعمل على تطوير نفسي كمطورة Full-Stack Web Developer، وأتعلم باستمرار، وأبني مشاريع جديدة، وأحوّل الأفكار إلى تجارب حقيقية يمكن للناس استخدامها.",
            closing: "رحلتي لم تنتهِ بعد...\nأنا فقط أكتب فصلها القادم.",
            isCurrent: true
          }
        ]
      },
      stats: [
        { value: "3+", label: "سنوات خبرة عملية" },
        { value: "15+", label: "مشاريع مكتملة" },
        { value: "10+", label: "تقنيات أتقنها" }
      ],
      highlights: [
        { title: "الواجهات الأمامية", desc: "React, Next.js, Angular, TypeScript" },
        { title: "الأنظمة الخلفية", desc: "Node.js, Express.js, Nest.js" },
        { title: "قواعد البيانات", desc: "MongoDB, PostgreSQL, MySQL" }
      ]
    },
    skills: {
      title: "ترسانتي التقنية",
      subtitle: "مجموعة شاملة من التقنيات والأدوات الحديثة التي أستخدمها لإنشاء تجارب رقمية ممتازة وبنية تحتية برمجية قابلة للتوسع.",
      categories: {
        frontend: "الواجهات الأمامية",
        backend: "الأنظمة الخلفية",
        database: "قواعد البيانات",
        tools: "الأدوات والعمليات"
      }
    },
    projects: {
      title: "أعمال مختارة",
      subtitle: "عرض لتطبيقات متميزة قمت ببنائها، تجمع بين التصميم الراقي وتجربة المستخدم الممتازة مع البنى البرمجية الخلفية القوية.",
      liveDemo: "عرض مباشر",
      sourceCode: "كود المشروع",
      items: [
        {
          title: "منصة جن التعلم الإلكترونية الذكية",
          description: "منصة تعليم إلكتروني مدعومة بالذكاء الاصطناعي، تقدم تجربة تعلم مخصصة مع إدارة الكورسات والاختبارات ومتابعة التقدم وميزات AI. تم تطويرها كمشروع Full-Stack جماعي.",
          tech: ["Angular 20", "Next.js", "NestJS", "MongoDB", "AI/RAG"]
        },
        {
          title: "منصة نكسس لتأجير وإدارة الكتب",
          description: "منصة حديثة لتأجير وإدارة الكتب، توفر اكتشاف الكتب واستئجارها وإدارتها، مع تسجيل دخول ولوحة تحكم للـAdmin. تم تطويرها كمشروع Full-Stack.",
          tech: ["Next.js", "Express.js", "Node.js", "MongoDB"]
        },
        {
          title: "متجر آدا الإلكتروني",
          description: "متجر إلكتروني حديث تم تطويره باستخدام Angular، يوفر تصفح المنتجات والبحث وتسجيل الدخول وتجربة تسوق متجاوبة.",
          tech: ["Angular 20", "Tailwind CSS", "Angular Signals", "REST API"]
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
          description: ""
        },
        {
          role: "برنامج التدريب المكثف — تطوير الويب Full-Stack والذكاء الاصطناعي التوليدي باستخدام MEARN",
          company: "معهد تكنولوجيا المعلومات (ITI)",
          period: "01/2026 – 06/2026 | قنا، مصر",
          description: "شمل التدريب: تطوير الويب Full-Stack، MongoDB، Express.js، Angular، React، Node.js، JavaScript، TypeScript، REST APIs، الذكاء الاصطناعي التوليدي، ومشاريع ويب عملية تحاكي بيئة العمل الحقيقية."
        },
        {
          role: "التدريب الصيفي في تطوير Front-End",
          company: "معهد تكنولوجيا المعلومات (ITI)",
          period: "08/2023 – 09/2023 | قنا، مصر",
          description: "شمل التدريب: HTML5، CSS3، تصميم الويب المتجاوب، Bootstrap 5، JavaScript، TypeScript، Angular، وأساسيات Flutter."
        }
      ],
      services: [
        { title: "تطوير ويب متكامل", desc: "تطوير كامل للمواقع والتطبيقات من البداية إلى النهاية باستخدام تقنيات MERN مع بنية برمجية قابلة للتوسع." },
        { title: "واجهات مستخدم متجاوبة", desc: "واجهات مستخدم متجاوبة ودقيقة تماماً بالتصميم، حديثة وسلسة تبدو مذهلة على جميع الشاشات والأجهزة." },
        { title: "واجهات برمجة التطبيقات", desc: "خدمات خلفية قوية وآمنة (REST & GraphQL) مخصصة لتلبية متطلبات البيانات المعقدة وقابلة للتكامل بسهولة." },
        { title: "نظم لوحات التحكم", desc: "لوحات تحكم وأنظمة تحليلات متقدمة لتصور البيانات المعقدة وتفسيرها مصممة خصيصاً للشركات." },
        { title: "التجارة الإلكترونية", desc: "متاجر إلكترونية ذات معدلات تحويل عالية مع ربط بوابات الدفع الآمنة وإدارة المنتجات وسلة المشتريات." },
        { title: "مواقع شخصية احترافية", desc: "مواقع شخصية وتفاعلية متميزة لعرض أعمالك ومهاراتك بشكل احترافي وتقديم علامتك التجارية للعالم." }
      ]
    },
    testimonials: {
      title: "آراء العملاء",
      subtitle: "لا تكتفِ بكلامي فقط. إليك ما يقوله قادة الصناعة والعملاء عن عملي وتجربتهم المميزة معي.",
      items: [
        {
          name: "سارة جينكينز",
          role: "الرئيس التنفيذي لشركة TechStart",
          content: "عبقرية برمجيات حقيقية! لوحة التحكم التي بنتها لنا لا تبدو مذهلة فحسب، بل تتعامل مع مجموعات البيانات الضخمة لدينا دون أي تأخير على الإطلاق. موصى بها للغاية لأي مشروع MERN معقد."
        },
        {
          name: "ماركوس تشين",
          role: "مدير المنتجات في Innovate.io",
          content: "الاهتمام البالغ بالتفاصيل في واجهة المستخدم والرسوم المتحركة السلسة غيّر تماماً تجربة مستخدمينا. محترفة حقيقية تقدم كودًا عالي الجودة في الوقت المحدد."
        },
        {
          name: "إيلينا رودريغيز",
          role: "مؤسسة DesignSpace",
          content: "سد الفجوة بين التصميم والتطوير أمر نادر الحدوث، لكنها أنجزت ذلك ببراعة. الموقع متطابق تماماً مع ملفات التصميم (Figma) ويعمل بسرعة فائقة."
        }
      ]
    },
    contact: {
      title: "لنبقى على اتصال",
      subtitle: "هل لديك مشروع في بالك أو تبحث عن توظيف؟ دعنا نناقش كيف يمكنني مساعدتك في تحويل رؤيتك إلى واقع ملموس.",
      getInTouch: "تواصل معي مباشرة",
      description: "أنا متاحة حالياً لفرص العمل المستقل والوظائف بدوام كامل. سواء كان لديك سؤال أو ترغب فقط في إلقاء التحية، سأبذل قصارى جهدي للرد عليك في أقرب وقت!",
      labels: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة"
      },
      placeholders: {
        name: "اسمك الكريم",
        email: "your.name@example.com",
        message: "أخبرني عن تفاصيل مشروعك..."
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
