import { ServiceCard, ServicesPageStyle } from './style'

export const ServicesPage = () => {
    return (
        <ServicesPageStyle className="m-80">
            <div className="title th-c">Our Services</div>
            <div className="description s-c">
                Elevate your business with comprehensive software services. Our expertise spans web and app development,
                captivating design, and insightful analytics. From ideation to execution, we craft tailored solutions that empower
                your digital presence, drive engagement, and fuel growth.
            </div>
            <ServiceCard>
                <div className="content-section">
                    <div className="c-title">Web Developers</div>
                    <div className="c-description s-c">
                        These developers specialize in building websites and web applications. They are proficient in frontend
                        technologies like HTML, CSS, and JavaScript, as well as backend languages and frameworks like Node.js,
                        Python (Django), Ruby (Ruby on Rails), and PHP (Laravel).
                    </div>
                </div>
                {/* <div className="images-section">
                    <img src="/images/services/software-development.jpg" alt="" />
                </div> */}
            </ServiceCard>
            <ServiceCard>
                <div className="content-section">
                    <div className="c-title">Mobile App Developers</div>
                    <div className="c-description s-c">
                        These developers focus on creating applications for mobile devices. They may specialize in developing for
                        Android using Java or Kotlin or for iOS using Swift or Objective-C
                    </div>
                </div>
                {/* <div className="images-section">
                    <img src="/images/services/software-development.jpg" alt="" />
                </div> */}
            </ServiceCard>
            <ServiceCard>
                <div className="content-section">
                    <div className="c-title">Full Stack Developers</div>
                    <div className="c-description s-c">
                        Full stack developers have expertise in both frontend and backend development. They can handle all aspects
                        of a web application, making them versatile and valuable team members.
                    </div>
                </div>
                {/* <div className="images-section">
                    <img src="/images/services/software-development.jpg" alt="" />
                </div> */}
            </ServiceCard>
            <ServiceCard>
                <div className="content-section">
                    <div className="c-title">DevOps Engineers</div>
                    <div className="c-description s-c">
                        DevOps engineers bridge the gap between development and operations. They focus on automating processes,
                        managing deployments, and ensuring smooth collaboration between development and IT teams.
                    </div>
                </div>
                {/* <div className="images-section">
                    <img src="/images/services/software-development.jpg" alt="" />
                </div> */}
            </ServiceCard>
            <ServiceCard>
                <div className="content-section">
                    <div className="c-title">Data Engineers</div>
                    <div className="c-description s-c">
                        Data engineers work on data-related tasks, such as designing and managing databases, creating data
                        pipelines, and handling data processing and storage.
                    </div>
                </div>
                {/* <div className="images-section">
                    <img src="/images/services/software-development.jpg" alt="" />
                </div> */}
            </ServiceCard>
            <ServiceCard>
                <div className="content-section">
                    <div className="c-title">Machine Learning Engineers</div>
                    <div className="c-description s-c">
                        These developers work on artificial intelligence (AI) and machine learning projects, building and
                        implementing algorithms and models.
                    </div>
                </div>
                {/* <div className="images-section">
                    <img src="/images/services/software-development.jpg" alt="" />
                </div> */}
            </ServiceCard>
            <ServiceCard>
                <div className="content-section">
                    <div className="c-title">Game Developers</div>
                    <div className="c-description s-c">
                        Game developers specialize in creating video games for various platforms, such as PC, consoles, or mobile
                        devices. They may work with game engines like Unity or Unreal Engine.
                    </div>
                </div>
                {/* <div className="images-section">
                    <img src="/images/services/software-development.jpg" alt="" />
                </div> */}
            </ServiceCard>
            <ServiceCard>
                <div className="content-section">
                    <div className="c-title">Cloud Engineers</div>
                    <div className="c-description s-c">
                        Cloud engineers focus on deploying, managing, and optimizing applications on cloud platforms like Amazon
                        Web Services (AWS), Microsoft Azure, or Google Cloud Platform (GCP).
                    </div>
                </div>
                {/* <div className="images-section">
                    <img src="/images/services/software-development.jpg" alt="" />
                </div> */}
            </ServiceCard>
            <ServiceCard>
                <div className="content-section">
                    <div className="c-title">Security Engineers</div>
                    <div className="c-description s-c">
                        Security engineers specialize in identifying and mitigating security vulnerabilities in software and
                        implementing measures to protect data and systems.
                    </div>
                </div>
                {/* <div className="images-section">
                    <img src="/images/services/software-development.jpg" alt="" />
                </div> */}
            </ServiceCard>
            {/* <ServiceCard className="m-80">
                <div className="content-section">
                    <div className="c-title">Software Development</div>
                    <div className="c-description s-c">
                        Unlock the potential of your business with our expert software development services. From intuitive web
                        and mobile applications to complex software solutions, we transform ideas into powerful, user-centric
                        realities. With meticulous coding, robust architecture, and a focus on innovation, we create software that
                        enhances efficiency, scales seamlessly, and drives your digital success.
                    </div>
                </div>
                <div className="images-section">
                    <img src="/images/services/software-development.jpg" alt="" />
                </div>
            </ServiceCard>
            <ServiceCard className="m-80">
                <div className="images-section t-img">
                    <img src="/images/services/web-development.jpg" alt="" />
                </div>
                <div className="content-section">
                    <div className="c-title">Web Development</div>
                    <div className="c-description s-c">
                        Elevate your online presence with our web development service. From conceptualization to launch, we craft
                        tailored websites that engage, inform, and captivate your audience. Our expertise spans responsive design,
                        seamless functionality, and intuitive navigation, ensuring a user-centric experience. Partner with us to
                        build a digital platform that embodies your brand's vision and drives impactful results in the digital
                        realm.
                    </div>
                </div>
                <div className="images-section b-img">
                    <img src="/images/services/web-development.jpg" alt="" />
                </div>
            </ServiceCard>
            <ServiceCard className="m-80">
                <div className="content-section">
                    <div className="c-title">App Development</div>
                    <div className="c-description s-c">
                        Transform your vision into dynamic mobile experiences with our app development services. We craft
                        user-friendly, feature-rich apps that resonate with your audience. From concept to launch, we create
                        solutions that engage and drive growth.
                    </div>
                </div>
                <div className="images-section">
                    <img src="/images/services/app-development.png" alt="" />
                </div>
            </ServiceCard>
            <ServiceCard className="m-80">
                <div className="images-section t-img">
                    <img src="/images/services/web-designing.jpg" alt="" />
                </div>
                <div className="content-section">
                    <div className="c-title">Web Designing</div>
                    <div className="c-description s-c">
                        Elevate your brand with captivating web designs that leave a lasting impression. Our expert designers
                        blend aesthetics with functionality to create visually stunning and user-centric websites. From concept to
                        interface, we shape digital experiences that engage and inspire
                    </div>
                </div>
                <div className="images-section b-img">
                    <img src="/images/services/web-designing.jpg" alt="" />
                </div>
            </ServiceCard>
            <ServiceCard className="m-80">
                <div className="content-section">
                    <div className="c-title">App Analytics</div>
                    <div className="c-description s-c">
                        Uncover insights, drive performance. Our app analytics service empowers your business with data-driven
                        decisions. We track user behavior, measure engagement, and optimize experiences to boost app success.
                        Elevate your strategy with actionable insights.
                    </div>
                </div>
                <div className="images-section">
                    <img src="/images/services/app-analytics.jpg" alt="" />
                </div>
            </ServiceCard>
            <ServiceCard className="m-80">
                <div className="images-section t-img">
                    <img src="/images/services/web-scraping.png" alt="" />
                </div>
                <div className="content-section">
                    <div className="c-title">Web Scraping</div>
                    <div className="c-description s-c">
                        Elevate your business with our Python-powered web scraping service. We harness cutting-edge techniques to
                        extract, organize, and analyze valuable data from diverse online sources. From market insights to
                        competitive analysis, our service empowers you to make informed decisions and gain a strategic advantage.
                        Trust our expertise to deliver accurate, timely, and actionable information that fuels your success.
                    </div>
                </div>
                <div className="images-section b-img">
                    <img src="/images/services/web-scraping.png" alt="" />
                </div>
            </ServiceCard> */}
        </ServicesPageStyle>
    )
}
