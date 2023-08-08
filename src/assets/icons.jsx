import opal96 from "./opal-96.png";
import Ts from "./ts.svg";
import OpalSVG from "./opalsvg"
import RealmSVG from "./realmsvg";
import pad from "./pad.png";
import { BsDoorClosedFill, BsDoorOpenFill, BsGearWideConnected, BsThreeDots, BsCheckCircleFill, BsPlusLg, BsXCircleFill, BsFillTrashFill, BsUpload, BsGridFill, BsPencilFill, BsBoxArrowLeft } from "react-icons/bs";
import { RiHome2Fill, RiBook2Fill, RiArrowLeftSLine } from "react-icons/ri";
import { MdImage, MdNumbers } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { FaBox } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineTemplate, HiEye, HiFilter, HiPlusCircle} from "react-icons/hi";
import { BiText, BiCheckCircle, BiLink, BiSearch } from "react-icons/bi";
import { AiFillTag } from "react-icons/ai";
import { RxDragHandleDots1 } from "react-icons/rx";

const newClass = x => x ? "icon " + x : "icon";


const
    OpalIcon = props => <OpalSVG {...props} className={newClass(props.className)}/>,
    RealmIcon = props => <RealmSVG {...props} className={newClass(props.className)}/>,
    ThoughtspaceIcon = props => <img {...props} className={newClass(props.className)} src={Ts} />,
    WarpIcon = props => <img src={pad} {...props} className={newClass(props.className)}/>,
    HomeIcon = props => <RiHome2Fill {...props} className={newClass(props.className)}/>,
    GearIcon = props => <BsGearWideConnected {...props} className={newClass(props.className)}/>,
    PlusIcon = props => <HiPlusCircle {...props} className={newClass(props.className)}/>,
    Plus2Icon = props => <BsPlusLg {...props} className={newClass(props.className)}/>,
    GridIcon = props => <BsGridFill {...props} className={newClass(props.className)}/>,
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
    PencilIcon = props => <BsPencilFill {...props} className={newClass(props.className)}/>,
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
    UploadIcon = props => <BsUpload {...props} className={newClass(props.className)} />,
    DragIcon = props => <RxDragHandleDots1 {...props} className={newClass(props.className)} />,
    LogoutIcon = props => <BsBoxArrowLeft {...props} className={newClass(props.className)} />,
    GoogleIcon = props => <FcGoogle {...props} className={newClass(props.className)} />


export {
    OpalIcon,
    RealmIcon,
    WarpIcon,
    ThoughtspaceIcon,
    GridIcon,
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
    PencilIcon,
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
    DragIcon,
    LogoutIcon,
    GoogleIcon
};