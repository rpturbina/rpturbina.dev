import { ContactItemProps } from '@typings/index';
import ContactItem from '@components/ContactItem';
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const contactItems: ContactItemProps[] = [
  {
    label: 'Contact me via GitHub',
    icon: <FaGithubSquare fontSize={35} />,
    href: 'https://github.com/rpturbina',
  },
  {
    label: 'Contact me via LinkedIn',
    icon: <FaLinkedin fontSize={35} />,
    href: 'https://www.linkedin.com/in/rpturbina/',
  },
  {
    label: 'Contact me via Instagram',
    icon: <FaInstagramSquare fontSize={35} />,
    href: 'https://www.instagram.com/rpturbina/',
  },
];

const ContactList = () => {
  return (
    <ul className="contact-items flex justify-between gap-x-3">
      {contactItems.map((item) => (
        <ContactItem
          href={item.href}
          key={item.label}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </ul>
  );
};
export default ContactList;
