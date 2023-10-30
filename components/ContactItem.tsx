import { ContactItemProps } from '@/typings/index'

const ContactItem = ({ label, icon, href }: ContactItemProps) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="contact-icon-anchor"
        aria-label={label}
      >
        {icon}
      </a>
    </li>
  )
}
export default ContactItem
