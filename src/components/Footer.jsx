import React from 'react'
import footerStyles from './footer.module.scss';
const Footer=()=>{
    return(
        <footer className={footerStyles.footer}>
            <div className="container">
                <span className="text-muted">Gatsby Blog 2020 &copy;</span>
            </div>
        </footer>
    )
}
export default Footer;