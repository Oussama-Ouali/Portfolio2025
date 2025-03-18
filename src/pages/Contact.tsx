
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-sky-500" size={24} />,
      title: "Email",
      details: "ouatiousssama034@gmail.com",
      link: "mailto:ouatiousssama034@gmail.com"
    },
    {
      icon: <Phone className="text-sky-500" size={24} />,
      title: "Phone",
      details: "+212 623393797",
      link: "tel:+212623393797"
    },
    {
      icon: <MapPin className="text-sky-500" size={24} />,
      title: "Location",
      details: "Tanger, Morocco",
      link: null
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Contact | Oussama Ouali</title>
        <meta name="description" content="Get in touch with Oussama Ouali, Mobile Application Developer and Frontend Developer." />
      </Helmet>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-sky-500/10 text-sky-500 text-sm font-medium mb-3">
              Get In Touch
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-10"
              >
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-4">{info.icon}</div>
                      <div>
                        <h3 className="font-medium">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-muted-foreground hover:text-sky-500 transition-colors"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
                <div className="mb-6">
                  <p className="text-muted-foreground mb-4">
                    Follow me on social media to stay updated with my latest projects and articles.
                  </p>
                  <SocialLinks iconSize={24} />
                </div>
                
                <div className="neo-blur p-6 rounded-xl">
                  <h3 className="text-xl font-medium mb-3">Looking for new opportunities</h3>
                  <p className="text-muted-foreground">
                    I'm currently open to new projects and opportunities. If you're looking for a dedicated developer
                    with experience in mobile and web development, let's talk!
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-8 rounded-xl"
            >
              <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Contact;
