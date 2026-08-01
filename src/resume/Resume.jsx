import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Resume.css';

export default function Resume() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleDownload = () => {
        const originalTitle = document.title;
        document.title = '임채주_이력서';
        window.print();
        document.title = originalTitle;
    };

    return (
        <div className="resume-page">
            <div className="resume-container">
                <header className="resume-header">
                    <Link to="/" className="back-link">← Home</Link>
                    <div className="header-top">
                        <div className="profile-img-container">
                            <img src="./profileimg.jpg" alt="임채주 프로필" className="resume-profile-img" />
                        </div>
                        <div className="header-content">
                            <h1>임채주</h1>
                            <p className="title">Ediscovery Specialist</p>
                            <div className="contact-info">
                                <span>📧 cjlim0523@naver.com</span>
                                <span>📱 010-8622-9529</span>
                                <span>🎂 2000.05.23</span>
                                <span>🚀 <a href="https://github.com/cjlim05" target="_blank" rel="noreferrer">github.com/cjlim05</a></span>
                                <span>📝 <a href="https://cjlim0523.github.io/cjlim0523/" target="_blank" rel="noreferrer">Portfolio</a></span>
                                <span>🔗 <a href="https://www.linkedin.com/in/chaeju/" target="_blank" rel="noreferrer">LinkedIn</a></span>
                            </div>
                        </div>
                    </div>
                    <button className="download-btn" onClick={handleDownload}>
                        <span className="icon">⬇️</span> PDF로 다운로드 하기
                    </button>
                </header>

                <main className="resume-body">
                    <section className="resume-section intro-section">
                        <div className="intro-card glass-card">
                            <p>👋 <strong>“eDiscovery 전문가를 꿈꾸는 임채주입니다”</strong></p>
                            <p>꾸준한 성장에 가치를 두는 인재입니다. 새로운 기술과 업무를 접하면 스스로 실습하며 원리를 완전히 이해할 때까지 파고드는 자세로 성장해왔습니다. 개발자로서 쌓아온 로그·데이터 분석 역량을 바탕으로, Deloitte Discovery Forensic Lab에서 eDiscovery 실무를 경험하며 데이터 수집, 처리, 분석 전반에 대한 전문성과 객관적인 사실관계를 규명하는 역량을 쌓아가고 있습니다.</p>
                        </div>
                    </section>

                    <section className="resume-section">
                        {/* <h2>Stacks</h2>
                        <div className="skills-grid">
                            <div className="skill-cat">
                                <strong>Backend</strong>
                                <ul>
                                    <li>Java, Spring Boot, JPA, JWT, OAuth2, WebSocket(STOMP), REST API</li>
                                </ul>
                            </div>
                            <div className="skill-cat">
                                <strong>Frontend</strong>
                                <ul>
                                    <li>JavaScript, React, Vite</li>
                                </ul>
                            </div>
                            <div className="skill-cat">
                                <strong>Infra / DevOps</strong>
                                <ul>
                                    <li>AWS (EC2, S3, CloudFront, Lambda, EventBridge), Git/GitHub</li>
                                </ul>
                            </div>
                            <div className="skill-cat">
                                <strong>Database & Automation</strong>
                                <ul>
                                    <li>MySQL</li>
                                    <li>AWS Lambda, n8n</li>
                                </ul>
                            </div>
                        </div> */}
                    </section>

                    <section className="resume-section">
                        <h2>경력</h2>
                        <div className="exp-list">
                            <div className="exp-item">
                                <div className="exp-header">
                                    <h3>딜로이트 안진 회계법인 (Discovery & Analysis Lab)</h3>
                                    <span className="date">2026.07 - 재직중</span>
                                </div>
                                <ul>
                                    <li>Falcon을 활용한 디지털 증거 수집</li>
                                    <li>EnCase를 활용한 Pre-processing 및 conditioning 작업</li>
                                    <li>Relativity에서 Reduction & Review 업무 수행</li>
                                </ul>
                            </div>
                            <div className="exp-item">
                                <div className="exp-header">
                                    <h3>퍼솔켈리코리아 IT부서</h3>
                                    <span className="date">2024.06 - 2024.08 (인턴)</span>
                                </div>
                                <p className="role">풀스택 개발자</p>
                                <ul>
                                    <li>CMS 요구사항 분석부터 설계, 개발, 배포까지 전체 개발 프로세스를 수행하며 서비스 구현 및 운영</li>
                                    <li>JSP 및 Apache Tomcat 기반 웹 서비스를 개발하고 안정적인 운영 환경을 구축</li>
                                    <li>사용자 요구사항과 운영 환경을 고려하여 기능을 개선하고 서비스 품질 향상에 기여</li>
                                    <li>비개발 직군과 협업하며 요구사항을 분석하고 실제 업무 프로세스를 반영한 기능을 구현</li>
                                    <li>Help Desk 업무를 수행하며 운영 이슈를 분석하고 장애 대응 및 유지보수를 지원</li>
                                </ul>
                            </div>
                            <div className="exp-item">
                                <div className="exp-header">
                                    <h3>에이치디메디 R&D</h3>
                                    <span className="date">2023.12 - 2024.02 (인턴)</span>
                                </div>
                                <p className="role">데이터 엔지니어</p>
                                <ul>
                                    <li>Python과 외부 API를 활용하여 약학정보원 의약품 데이터 10만 건 이상의 수집 및 데이터 파이프라인 구축</li>
                                    <li>데이터 정합성 검증과 QA 프로세스를 수행하여 데이터 정확성과 신뢰성을 향상</li>
                                    <li>플랫폼 간 데이터 불일치 문제를 분석하고 정제 로직을 적용하여 일관성 있는 데이터 관리 체계를 구축</li>
                                    <li>AWS Lambda 및 n8n을 활용한 업무 자동화를 구현하여 반복 작업을 최소화하고 데이터 수집 및 처리 효율을 개선</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>프로젝트</h2>
                        <div className="exp-list">
                            <div className="exp-item">
                                <div className="exp-header">
                                    <h3>찬주런 (ChanjuRun) : 위치 기반 러닝 커뮤니티 서비스</h3>
                                    <span className="date">2025.10 - 2025.12</span>
                                </div>
                                <ul>
                                    <li>Spring Boot 및 React 기반 서비스의 설계 및 개발에 참여하며 프론트엔드와 백엔드를 아우르는 전체 시스템 구현 수행</li>
                                    <li>WebSocket(STOMP)을 활용한 실시간 채팅 기능을 구현하여 이벤트 기반 통신 및 실시간 데이터 처리 경험 확보</li>
                                    <li>AWS EC2, S3, CloudFront를 활용한 서비스 배포 및 운영 환경을 구축하여 안정적인 서비스 제공 기반 마련</li>
                                    <li>AWS Lambda와 EventBridge를 활용해 서버리스 아키텍처 기반의 자동화 모니터링 환경을 구현하고 운영 프로세스를 효율화</li>
                                    <li>Telegram Bot을 활용하여 운영 자동화 시스템의 원격 제어 및 실시간 상태 확인 기능을 구현해 관리 편의성 향상</li>
                                    <li>VPC Flow Log 분석을 기반으로 네트워크 트래픽과 보안 취약점을 점검하고 운영 환경의 안정성과 보안성을 개선</li>
                                    <li>AI 활용을 통한 빌드 및 배포 자동화 구축</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>수상</h2>
                        <div className="exp-list">
                            <div className="exp-item">
                                <div className="exp-header">
                                    <h3>군장병 SW 온라인 해커톤 장려상</h3>
                                    <span className="date">2022년 12월</span>
                                </div>
                            </div>
                            <div className="exp-item">
                                <div className="exp-header">
                                    <h3>헥토 SW 아카데미 프로젝트 은상</h3>
                                    <span className="date">2025년 12월</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>학력</h2>
                        <div className="edu-list">
                            <div className="edu-item">
                                <div className="exp-header">
                                    <h3>서경대학교</h3>
                                    <span className="date">2020.03 - 2026.02 (졸업)</span>
                                </div>
                                <p>소프트웨어학과 학사 (학점 3.95/4.5)</p>
                            </div>
                            <div className="edu-item">
                                <div className="exp-header">
                                    <h3>단국대학사범대학부속고등학교</h3>
                                    <span className="date">2016.02 - 2019.03</span>
                                </div>
                                <p>졸업</p>
                            </div>
                        </div>
                    </section>

                    <section className="resume-section languages">
                        <h2>외국어 능력</h2>
                        <div className="lang-grid">
                            <div className="lang-item"><strong>한국어 🇰🇷</strong><span>원어민</span></div>
                            <div className="lang-item"><strong>영어 🇺🇸</strong><span>OPIc AL (2026년 02월)</span></div>
                            <div className="lang-item"><strong>중국어 🇨🇳</strong><span>초급 (중국 거주 경험)</span></div>
                        </div>
                    </section>

                    <section className="resume-section essays">
                        <h2>자기소개서</h2>
                            <div className="essay-item">
                                <h3>지원 동기</h3>
                                <p>
                                    개발자로 서비스를 설계하고 운영하면서 가장 큰 흥미를 느꼈던 순간은 로우데이터를 통해 문제의 원인을 추적하고 객관적인 사실관계를 규명했을 때였습니다. 서비스를 안정적으로 운영하기 위해서는 단순히 오류를 수정하는 것이 아닌 다양한 로그와 로우데이터를 분석하여 문제 원인을 정확하게 찾아내는 과정이 필수적이었습니다. 이러한 경험을 통해 데이터를 단순한 기록이 아닌 사실을 설명하는 객관적인 근거로 바라보게 되었고, 자연스럽게 디지털 증거와 데이터를 기반으로 기업의 분쟁과 조사 업무를 지원하는 eDiscovery 분야에 관심을 갖게 되었습니다.
                                </p>
                                <p>
                                    이러한 관심의 출발점은 AWS 환경에서 서비스를 운영하며 수행했던 로그 분석 경험이었습니다. 서비스를 운영하던 중 VPC Flow Logs를 분석하는 과정에서 반복적인 포트 스캐닝과 SSH 인증 실패, 비정상적인 접근 시도가 지속적으로 발생하고 있다는 사실을 확인했습니다. 단순히 개별 로그를 확인하는 데 그치지 않고 시간순으로 이벤트를 재구성하며 접근 흐름을 추적한 결과, 특정 시점에 집중된 접근 시도가 시스템의 외부 노출 구조와 연관되어 있다는 점을 파악할 수 있었습니다. 이후 보안 그룹과 접근 정책을 개선하고 CloudWatch와 AWS Lambda를 활용한 모니터링 체계를 구축하여 이상 징후를 지속적으로 탐지할 수 있도록 환경을 개선했습니다. 이 경험을 통해 하나의 결론을 도출하기 위해서는 다양한 데이터를 교차 검토하고 객관적인 근거를 바탕으로 사실관계를 재구성하는 과정이 무엇보다 중요하다는 사실을 몸소 배웠으며, 이러한 과정에서 가장 큰 흥미와 성취감을 느꼈습니다.
                                </p>
                            </div>

                            <div className="essay-item">
                                <h3>딜로이트 안진 eDiscovery 실무 경험</h3>
                                <p>
                                    딜로이트 안진 Discovery & Analysis Lab에서의 eDiscovery 실무 경험은 이러한 관심을 확신으로 바꾸는 계기가 되었습니다. 실제 기업 프로젝트에 참여하며 Falcon을 활용한 디지털 증거 수집부터 EnCase를 이용한 Pre-processing을 수행했으며, Relativity에서는 Reduction과 Review 업무를 수행하며 사건과 관련된 정보를 선별하고 검토하는 과정을 경험했습니다. 각 단계는 사용하는 도구와 업무는 달랐지만, 공통적으로 요구되는 것은 방대한 데이터 속에서 의미 있는 정보를 찾아내고 증거의 무결성을 유지하며 객관적인 사실관계와 relevance가 높은 자료를 선별하는 능력이었습니다. 이러한 실무를 통해 eDiscovery는 기술과 법률을 연결하는 전문 분야라는 점을 깊이 이해하게 되었습니다.
                                </p>
                                <p>
                                    돌이켜보면 개발 프로젝트에서 수행했던 로그 분석과 eDiscovery 실무에서 수행한 디지털 증거 분석은 서로 다른 업무가 아니었습니다. 둘 모두 수많은 데이터 속에서 의미 있는 정보를 찾아내고 다양한 자료를 교차 검토하여 사실관계를 재구성하며 객관적인 근거를 기반으로 결론을 도출하는 동일한 사고방식을 요구했습니다. 개발자로서 쌓아온 데이터 분석 역량과 eDiscovery 실무 경험이 하나의 방향으로 자연스럽게 이어진다는 것을 확인하면서, 이 분야에서 전문성을 쌓아가고 싶다는 확신을 갖게 되었습니다.
                                </p>
                            </div>

                            <div className="essay-item">
                                <h3>입사 후 포부</h3>
                                <p>
                                    다양한 국내외 분쟁과 조사 사건을 수행하며 eDiscovery를 통해 객관적인 사실관계를 규명하는 전문성을 갖춘 법무법인 지평에서, 변호사와 eDiscovery 전문가로서 긴밀하게 협업하여 기술적 분석과 법률적 판단을 연결하는 데 기여하고 싶습니다. 입사 후에는 개발 과정에서 길러온 분석적 사고와 딜로이트 안진에서의 실무 경험을 바탕으로 신뢰할 수 있는 eDiscovery 서비스를 제공하는 구성원이 되고자 합니다. 또한 다양한 사건을 수행하며 변호사들과 함께 사건을 분석하고 법률적 사고를 배우는 동시에 eDiscovery 전문성을 더욱 발전시켜, 디지털 증거를 기반으로 객관적인 사실관계를 규명하고 기업의 분쟁 해결에 실질적으로 기여하는 전문가로 성장하겠습니다.
                                </p>
                            </div>
                    </section>
                </main>

                <footer className="resume-footer">
                    <p>© 2024 Chaeju Lim. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}