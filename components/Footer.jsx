import "../src/styles/footer.css"

export default function Footer(){
    let d=new Date();

    return(
        <footer>
            <div className="footer-labels">
                <a href="mailto:spadaros.lorenzo@gmail.com">Contact</a>
                <a href="https://github.com/spasaLor" target="_blank">GitHub</a>
                <a href="/resume.pdf" target="_blank">Resume</a>
            </div>
            <p id="last">&copy; Lorenzo {d.getFullYear()} — See you, Space Cowboy</p>
        </footer>
    );
}