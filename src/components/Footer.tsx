
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">Oussama Ouali</h3>
            <p className="text-sm text-muted-foreground mb-4 text-center">
              Mobile Application Developer | Frontend Developer
            </p>
          </motion.div>

          <SocialLinks className="mb-6" />

          <p className="text-sm text-muted-foreground">
            © {currentYear} Oussama Ouali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
