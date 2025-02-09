import { Phone, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">High Security Prison</h3>
            <p className="text-sm text-muted-foreground">69 Restricted Area, Bone County, SA 88901</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <a href="https://vk.com/maksanchez" className="flex items-center text-sm">
              <Phone className="mr-2 h-4 w-4" /> @maksanchez
            </a>
            <a href="mailto:prison@denzyve.xyz" className="flex items-center text-sm">
              <Mail className="mr-2 h-4 w-4" /> prison@denzyve.xyz
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Arizona RP High Security Prison. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

