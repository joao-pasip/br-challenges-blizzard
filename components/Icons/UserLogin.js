import Image from "next/image";
import user from '../../assets/images/user-logar-icon.png';

export default function UserLogin() {
  return (
    <Image
      priority
      height='auto'
      width='auto'
      src={user}
      alt="Follow us on Twitter"
    />
  )
}