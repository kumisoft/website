import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Globe,
  Smartphone,
  Database,
  Users,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center font-bold text-white">
              K
            </div>
            <span className="text-xl font-bold">KUMISOFT</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#home"
              className="text-sm font-medium hover:text-orange-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-orange-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#team"
              className="text-sm font-medium hover:text-orange-400 transition-colors"
            >
              Team
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-orange-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-orange-600/20 text-orange-400 border-orange-600/30"
                >
                  Web & Software Development
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Innovative{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    Solutions
                  </span>{" "}
                  in Web and Software Development
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Designing the Digital Future: Experts in Web Creation and
                  Custom Software Development.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  <Link href="#contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                >
                  <Link href="#services">View Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/hero.svg"
                  priority
                  alt="Kumisoft Web Development"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-orange-600/20 text-orange-400 border-orange-600/30"
            >
              Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Technology
              </span>{" "}
              Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We offer comprehensive web and software development services,
              tailored to your business’s specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Web Development</CardTitle>
                <CardDescription className="text-slate-400">
                  Modern, responsive websites optimized for SEO
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    Responsive design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    SEO optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    Custom CMS
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Custom Software</CardTitle>
                <CardDescription className="text-slate-400">
                  Custom applications to optimize your business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    Requirements analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    Agile development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    Continuous support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Mobile Apps</CardTitle>
                <CardDescription className="text-slate-400">
                  Native and hybrid applications for iOS and Android
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    Cross-platform
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    Optimized UX/UI
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    API integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Database</CardTitle>
                <CardDescription className="text-slate-400">
                  Design and optimization of scalable databases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    Data modeling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    Optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    Secure migration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-600/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">IT Consulting</CardTitle>
                <CardDescription className="text-slate-400">
                  Technology consulting for your digital transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    Technical audit
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    Digital strategy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-400 mr-2" />
                    Training
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border-orange-600/50 hover:border-orange-400 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Custom Project</CardTitle>
                <CardDescription className="text-slate-400">
                  Have a specific idea? Let’s talk about your project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Consult Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-orange-600/20 text-orange-400 border-orange-600/30"
            >
              Our Team
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Technology{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Experts
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A multidisciplinary team of developers, designers and consultants
              committed to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                  JD
                </div>
                <CardTitle className="text-white">John Developer</CardTitle>
                <CardDescription className="text-slate-400">
                  Full Stack Developer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm">
                  Specialist in React, Node.js and scalable architectures with
                  more than 5 years of experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                  MD
                </div>
                <CardTitle className="text-white">Mary Designer</CardTitle>
                <CardDescription className="text-slate-400">
                  UX/UI Designer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm">
                  Expert in user-centered design and memorable digital
                  experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                  CA
                </div>
                <CardTitle className="text-white">Carl Architect</CardTitle>
                <CardDescription className="text-slate-400">
                  Software Architect
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm">
                  Specialist in software architectures and complex enterprise
                  solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-orange-600/20 text-orange-400 border-orange-600/30"
            >
              Contact
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Let’s Talk About Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Project
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We’re ready to turn your ideas into digital reality. Contact us
              for a free consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-slate-300">contact@kumisoft.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-slate-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Location
                    </h3>
                    <p className="text-slate-300">City, Country</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Why Choose Kumisoft?
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-400 mr-3" />
                    Proven experience in successful projects
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-400 mr-3" />
                    Modern and scalable technologies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-400 mr-3" />
                    Continuous support and maintenance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-400 mr-3" />
                    Competitive and transparent pricing
                  </li>
                </ul>
              </div>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">
                  Request a Free Consultation
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Tell us about your project and we’ll contact you within 24
                  hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">
                    Project Type
                  </label>
                  <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Web Development</option>
                    <option>Custom Software</option>
                    <option>Mobile App</option>
                    <option>IT Consulting</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Send Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center font-bold text-white">
                  K
                </div>
                <span className="text-xl font-bold">KUMISOFT</span>
              </div>
              <p className="text-slate-400 text-sm">
                Innovative solutions in web and software development. We
                transform ideas into digital reality.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Custom Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    IT Consulting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>contact@kumisoft.com</li>
                <li>+1 (555) 123-4567</li>
                <li>City, Country</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Kumisoft. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-slate-400 hover:text-orange-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-orange-400 transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
