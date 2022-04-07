import React from 'react'

function Footer() {
  return (
        <footer className="footer">
            <p className="text-md footer-header">made by &nbsp;<span>Chanchal</span></p>
            <div className="socials">
            <a className="links" href="https://github.com/chanchal16" target="_blank">
                <i className="fab fa-github fa-2x"></i></a>
            <a className="links" href="https://twitter.com/chanchal16_" target="_blank" >
                <i className="fab fa-twitter fa-2x"></i></a>
            <a className="links" href="https://www.linkedin.com/in/rajput07/" target="_blank">
                <i className="fab fa-linkedin-in fa-2x"></i></a>
            </div>
            <p className="text-xs footer-header">© 2022 &nbsp;<span>ipops</span></p>
        </footer>
  )
}
export {Footer}