import opal96 from "./opal-96.png";
import Ts from "./ts.svg";
import pad from "./pad.png";
import { BsDoorClosedFill, BsDoorOpenFill, BsGearWideConnected, BsThreeDots, BsCheckCircleFill, BsPlusLg, BsXCircleFill, BsFillTrashFill, BsCloudUpload } from "react-icons/bs";
import { RiHome2Fill, RiBook2Fill, RiArrowLeftSLine } from "react-icons/ri";
import { MdImage, MdNumbers } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { FaBox } from "react-icons/fa";
import { HiOutlineTemplate, HiEye, HiFilter, HiPlusCircle} from "react-icons/hi";
import { BiText, BiCheckCircle, BiLink, BiSearch } from "react-icons/bi";
import { AiFillTag } from "react-icons/ai";
import { RxDragHandleDots1 } from "react-icons/rx";

const newClass = x => x ? "icon " + x : "icon";

const
    OpalIcon = props => <img src={opal96} {...props} className={newClass(props.className)}/>,
    RealmIcon = props => <img {...props} className={newClass(props.className)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACyklEQVR4nO2dTVLcMBCFlVSSwzhV2Qyafru5UliEHCBQOCfIz5lYcAh+jgBk45QqLFgAkTzt6Vb7fVXa2jPvtay2WpZSIoQQQohfhmH4ICLfAdwAmNjwogYicg1gLJqpGVAuSNHRGnijpgGMfDQbcKtmwGO34qMH9RqIyJWaAXwEYU7wnasZUAaUYgJ7AmwGYUIIIeR/ADhdQbr6zW0k7Ha7dwAuHIg0LdQu3Wc32+12EJE7B2JNmk1E7kXkU+oBAMfWgkG/fU4d8QbAr0DR/yN1SDHhBMCDtYCY38pv/1L+S+qVnPNRx5G/SRGwFhIzW4qC1R9E5X1pwELQgEYhtKEBjUJoQwMahdCGBjzyXCVNtWa6533XMAiPNTXT4cn6I43SXu19wxvwtKb8mrB4XrDxAPeNbcCe649uD3BfGtDDYB0eVAqxwFhBAxrTRtWxIrwBtRGLSiFeSC+v5/6+8AbURiyMJs/CG1AbsVA2QLvndYu2sFAeK2jAcgZUvVfQAPuewkdQgQYshLawojzLaTVbezAONLieL329btFOQwflWc7a63WL1bw8og+u3uflQQNsBQMNoAFdAaMeoF1f6BYYGaBdX3CH1awkjOoL7rCalYTyC2C3WM1KggbYCgEaQANcYDUrCfaAZiFGzTWkNKBRiEF5DSnT0EYhDFdZxK4HeM9uhhXUA1wbEB4aYAwNWKkBEn21Qy0tg6Ho5vcm36a5Y0/BxrlpqNW3ae7QfiGCct6+hnqA67wd0dNV73k7aMA/aMBCsAcYQwOcGgDnLUWg5037cs5HqWPeishXAH+shcR+21ae9LhtZdkz9LcDASeNJiI/U09w62JDcs4fI27eDeDB/ebdm83mPbevN0REzhxE6rRwO7XUmBBCyMrgecJoeWnjecLw0XieMGwN4HnCMDSA5wnD/BHE84RhE/nxFnYRQgghKSB/AReCJe2eZoIUAAAAAElFTkSuQmCC" />,
    ThoughtspaceIcon = props => <img {...props} className={newClass(props.className)} src={Ts} />,
    WarpIcon = props => <img src={pad} {...props} className={newClass(props.className)}/>,
    HomeIcon = props => <RiHome2Fill {...props} className={newClass(props.className)}/>,
    GearIcon = props => <BsGearWideConnected {...props} className={newClass(props.className)}/>,
    PlusIcon = props => <HiPlusCircle {...props} className={newClass(props.className)}/>,
    Plus2Icon = props => <BsPlusLg {...props} className={newClass(props.className)}/>,
    DoorIcon = props => <BsDoorClosedFill {...props} className={newClass(props.className)}/>,
    DoorOpenIcon = props => <BsDoorOpenFill {...props} className={newClass(props.className)}/>,
    BookIcon = props => <RiBook2Fill {...props} className={newClass(props.className)}/>,
    PaperIcon = props => <IoDocumentText {...props} className={newClass(props.className)}/>,
    CheckIcon = props => <BsCheckCircleFill {...props} className={newClass(props.className)}/>,
    SmileIcon = props => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props} className={newClass(props.className)}><path d="M12 18c4 0 5-4 5-4H7s1 4 5 4z"></path><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="m13 12 2 .012c.012-.462.194-1.012 1-1.012s.988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3zm-5-1c.806 0 .988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3l2 .012C7.012 11.55 7.194 11 8 11z"></path></svg>,
    ImageIcon = props  => <MdImage {...props} className={newClass(props.className)}/>,
    AttributeIcon = props => <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props} className={newClass(props.className)}><path d="M5 9V7H7V9H5Z" fill="currentColor"></path><path d="M9 9H19V7H9V9Z" fill="currentColor"></path><path d="M5 15V17H7V15H5Z" fill="currentColor"></path><path d="M19 17H9V15H19V17Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z" fill="currentColor"></path></svg>,
    TemplateIcon = props => <HiOutlineTemplate {...props} className={newClass(props.className)} />,
    XIcon = props => <BsXCircleFill {...props} className={newClass(props.className)}/>,
    BoxIcon = props => <FaBox {...props} className={newClass(props.className)}/>,
    TrashIcon = props => <BsFillTrashFill {...props} className={newClass(props.className)}/>,
    TextIcon = props => <BiText {...props} className={newClass(props.className)}/>,
    NumberIcon = props => <MdNumbers {...props} className={newClass(props.className)}/>,
    Check2Icon = props => <BiCheckCircle {...props} className={newClass(props.className)}/>,
    TagIcon = props => <AiFillTag {...props} className={newClass(props.className)}/>,
    LinkIcon = props => <BiLink {...props} className={newClass(props.className)}/>,
    ArrowBackIcon = props => <RiArrowLeftSLine {...props} className={newClass(props.className)}/>,
    EyeIcon = props => <HiEye {...props} className={newClass(props.className)}/>,
    FilterIcon = props => <HiFilter {...props} className={newClass(props.className)}/>,
    SearchIcon = props => <BiSearch {...props} className={newClass(props.className)}/>,
    MoreIcon = props => <BsThreeDots {...props} className={newClass(props.className)}/>,
    UploadIcon = props => <BsCloudUpload {...props} className={newClass(props.className)} />,
    DragIcon = props => <RxDragHandleDots1 {...props} className={newClass(props.className)} />

export {
    OpalIcon,
    RealmIcon,
    WarpIcon,
    ThoughtspaceIcon, 
    DoorIcon,
    DoorOpenIcon,
    HomeIcon,
    GearIcon,
    PlusIcon,
    Plus2Icon,
    CheckIcon,
    XIcon,
    BookIcon,
    PaperIcon,
    SmileIcon,
    ImageIcon,
    AttributeIcon,
    TemplateIcon,
    BoxIcon,
    TrashIcon,
    TextIcon,
    NumberIcon,
    Check2Icon,
    TagIcon,
    LinkIcon,
    ArrowBackIcon,
    EyeIcon,
    FilterIcon,
    SearchIcon,
    MoreIcon,
    UploadIcon,
    DragIcon
};