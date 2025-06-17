import "../src/styles/skills.css";

export default function Skills(){
    return(
        <section id="skills">
            <h1>Tools and Skills</h1>
            <div className="skills-container">
                <div className="frontend">
                      <div className="drawer-label">Frontend</div>
                    <div className="skills-cassette">
                        <p>HTML</p>
                    </div>
                    <div className="skills-cassette">
                        <p>CSS</p>
                    </div>
                    <div className="skills-cassette">
                        <p>JavaScript</p>
                    </div>
                    <div className="skills-cassette">
                        <p>React</p>
                    </div>
                </div>
                <div className="backend">
                      <div className="drawer-label">Backend</div>
                    <div className="skills-cassette">
                        <p>NodeJs</p>
                    </div>
                    <div className="skills-cassette">
                        <p>Express</p>
                    </div>
                    <div className="skills-cassette">
                        <p>REST API</p>
                    </div>
                    <div className="skills-cassette">
                        <p>JavaScript</p>
                    </div>
                    <div className="skills-cassette">
                        <p>MySQL</p>
                    </div>
                    <div className="skills-cassette">
                        <p>PostgresQL</p>
                    </div>
                    <div className="skills-cassette">
                        <p>Jest</p>
                    </div>
                </div>
                <div className="miscellaneous">
                    <div className="drawer-label">Miscellaneous</div>
                    <div className="skills-cassette">
                        <p>Github</p>
                    </div>
                    <div className="skills-cassette">
                        <p>Postman</p>
                    </div>
                    <div className="skills-cassette">
                        <p>Kafka</p>
                    </div>
                    <div className="skills-cassette">
                        <p>Prometheus</p>
                    </div>
                    <div className="skills-cassette">
                        <p>Microsoft Azure</p>
                    </div>
                    <div className="skills-cassette">
                        <p>Huggingface</p>
                    </div>
                    <div className="skills-cassette">
                        <p>Photoshop</p>
                    </div>
                </div>
            </div>
        </section>
    )
}