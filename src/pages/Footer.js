import styles from '../assets/styles/Projects.module.css';
import gitIcon from '../assets/icons/footer/github.png';
import linkedinIcon from '../assets/icons/footer/linkedin.png';
import instagramIcon from '../assets/icons/footer/instagram.png';
import emailIcon from '../assets/icons/footer/envelope.png';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>
                Gabriel Moraes
            </p>
            <ul className={styles.buttonList}>
                <li>
                    <a href="https://github.com/GabrielMoraeswolf">
                        <img src={gitIcon} alt="GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/gabriel-rodrigues-de-moraes/">
                        <img src={linkedinIcon} alt="Linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/gabriel.moraesw/">
                        <img src={instagramIcon} alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a href="mailto:gabrielrmoraes@outlook.com">
                        <img src={emailIcon} alt="Email" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;