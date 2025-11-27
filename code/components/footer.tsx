export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary/5 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Backend Dev</h4>
            <p className="text-sm text-muted-foreground">
              Building scalable systems and robust APIs.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Follow</h4>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                GitHub
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} My Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
