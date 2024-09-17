'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Link as ScrollLink, Element } from 'react-scroll'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Monitor, ShoppingCart, Layout, User, Globe, Bot, Facebook, Twitter, Linkedin, Instagram, Menu, X } from 'lucide-react'

const services = [
  { name: 'Company Websites', icon: Monitor, description: 'Professional and corporate site designs tailored for businesses.' },
  { name: 'E-commerce Solutions', icon: ShoppingCart, description: 'Fully integrated online stores with payment gateways and user-friendly layouts.' },
  { name: 'SaaS Platforms', icon: Layout, description: 'Custom SaaS solutions with clean and scalable UI/UX.' },
  { name: 'Personal Portfolios', icon: User, description: 'Elegant, personalized portfolio websites for individuals.' },
]

const navItems = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Services', href: 'services' },
  { name: 'Portfolio', href: 'portfolio' },
  { name: 'Contact', href: 'contact' },
]

const AnimatedSection = ({ children, className }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[#F4F4F4]">
      <header className="bg-white shadow-sm fixed w-full z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <ScrollLink to="home" smooth={true} duration={500} className="text-2xl font-bold text-[#003366] cursor-pointer">
            Missiteam
          </ScrollLink>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                smooth={true}
                duration={500}
                className="text-[#003366] hover:text-[#FF6600] transition-colors cursor-pointer"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
          <button
            className="md:hidden text-[#003366]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-md"
          >
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                smooth={true}
                duration={500}
                className="block py-2 px-4 text-[#003366] hover:bg-[#F4F4F4] hover:text-[#FF6600] transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </ScrollLink>
            ))}
          </motion.div>
        )}
      </header>

      <Element name="home">
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#003366] to-[#0099CC] text-white pt-20">
          <div className="container mx-auto px-4 py-20 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to Missiteam
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Global Web Development Experts
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <service.icon className="h-8 w-8 mb-2 mx-auto" />
                  <p className="text-sm">{service.name}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild size="lg" className="bg-[#FF6600] hover:bg-[#FF8533] text-white">
                <ScrollLink to="contact" smooth={true} duration={500}>
                  Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </ScrollLink>
              </Button>
            </motion.div>
          </div>
        </section>
      </Element>

      <Element name="about">
        <AnimatedSection className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#003366]">About Missiteam</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#003366]">Our Mission</h3>
                <p className="mb-4">
                  At Missiteam, our mission is to empower businesses and individuals worldwide with cutting-edge web solutions. We believe in harnessing the power of technology to create impactful digital experiences that drive growth and success.
                </p>
                <p>
                  With a team of 50+ talented developers spread across the globe, we bring diverse perspectives and expertise to every project, ensuring innovative and culturally relevant solutions for our clients.
                </p>
              </div>
              <div className="flex justify-center">
                <Globe className="h-48 w-48 text-[#FF6600]" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Element>

      <Element name="services">
        <AnimatedSection className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#003366]">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={service.name}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <service.icon className="h-12 w-12 mb-4 text-[#FF6600]" />
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button variant="outline">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Element>

      <Element name="portfolio">
        <AnimatedSection className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#003366]">Our Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item}>
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                      <img
                        src={`/placeholder.svg?height=200&width=300&text=Project ${item}`}
                        alt={`Project ${item}`}
                        className="object-cover rounded-md"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                    <p className="text-gray-600 mb-4">A brief description of the project and its key features.</p>
                    <Button variant="outline">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Element>

      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#003366]">Why Choose Missiteam?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Global Expertise</h3>
                <p>With 50+ talented developers worldwide, we bring diverse perspectives to every project.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">AI Integration</h3>
                <p>We leverage cutting-edge AI technology, including chatbots, to enhance user experiences.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
                <p>From company websites to SaaS platforms, we create tailored solutions for your unique needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      <Element name="contact">
        <AnimatedSection className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#003366]">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit" className="bg-[#FF6600] hover:bg-[#FF8533] text-white">Send Message</Button>
                </form>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#003366]">Get in Touch</h3>
                <p className="mb-4">Feel free to reach out to us using the contact form or the information below:</p>
                <ul className="space-y-2 mb-8">
                  <li><strong>Address:</strong> 123 Tech Street, Silicon Valley, CA 94000</li>
                  <li><strong>Phone:</strong> (123) 456-7890</li>
                  <li><strong>Email:</strong> info@missiteam.dev</li>
                </ul>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6482351068635!2d-122.08624618469212!3d37.42199997982362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1653308837271!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Element>

      <footer className="bg-[#003366] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Missiteam</h2>
              <p>Global web development experts specializing in company websites, e-commerce solutions, SaaS platforms, and personal portfolios.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <ScrollLink
                      to={item.href}
                      smooth={true}
                      duration={500}
                      className="hover:text-[#FF6600] transition-colors cursor-pointer"
                    >
                      {item.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#FF6600] transition-colors">
                  <span className="sr-only">Facebook</span>
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-white hover:text-[#FF6600] transition-colors">
                  <span className="sr-only">Twitter</span>
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-white hover:text-[#FF6600] transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-white hover:text-[#FF6600] transition-colors">
                  <span className="sr-only">Instagram</span>
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#0099CC] text-center">
            <p>&copy; {new Date().getFullYear()} Missiteam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}