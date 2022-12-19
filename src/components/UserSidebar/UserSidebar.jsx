//react-router-dom
import { Link, useLocation, useNavigate } from "react-router-dom";
//context
import { useAuth } from "../../contexts/AuthContext";
//components
import MainTweetModal from "../MainTweetModal/MainTweetModal";
//style
import styles from "./UserSidebar.module.scss";
//jwt
import jwt_decode from "jwt-decode";

//icons
//logo
export const LogoIcon = ({ size }) => {
  return (
    <svg
      width={size || 40}
      height={size || 40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.6995 18.4711C25.6995 18.4711 18.2327 30.5783 12.1108 30.5783C1.40302 30.5783 11.3819 7.51343 19.1915 7.51343C24.6409 7.51343 25.6995 18.4711 25.6995 18.4711Z"
        fill="#FF6600"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.5723 33.6972C32.4451 35.9607 29.8198 37.6976 26.9044 38.7701C23.989 39.8426 20.8639 40.2213 17.7767 39.8761C14.6895 39.5309 11.7252 38.4713 9.11881 36.7813C6.51245 35.0914 4.33573 32.8175 2.76123 30.1401C4.5314 32.5477 7.53375 34.1527 11.803 34.1527C22.3199 34.1527 28.2899 25.98 28.2899 25.98C28.2899 25.98 28.8062 32.4392 34.5593 33.6972H34.5723Z"
        fill="#FF6600"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.7223 10.7451C39.2963 13.7527 40.0781 17.1116 39.9939 20.505C39.9096 23.8984 38.9621 27.2144 37.2407 30.1401C35.8792 29.3764 34.8725 28.1082 34.4379 26.609L32.1558 19.7724L37.7223 10.7451Z"
        fill="#FF6600"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0031 0.0173688C25.0185 0.0140335 29.8513 1.89881 33.5398 5.29665L29.7521 11.4088C28.3811 7.84302 25.5957 4.2729 20.1767 4.2729C9.07841 4.2729 0.852307 16.3888 0.852307 23.9846C0.849861 24.9669 0.975283 25.9454 1.22543 26.8953C0.115582 23.8725 -0.247948 20.6265 0.165719 17.4331C0.579385 14.2398 1.75802 11.1934 3.60147 8.55306C5.44491 5.91269 7.89866 3.75634 10.7542 2.26726C13.6097 0.778179 16.7826 0.000388507 20.0031 0V0.0173688Z"
        fill="#FF6600"
      />
    </svg>
  );
};

//home
export const HomeActiveIcon = () => {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.58 6.34998L12.475 0.896978C12.178 0.736978 11.821 0.736978 11.525 0.896978L1.42496 6.34998C0.938957 6.61398 0.757957 7.21998 1.01996 7.70598C1.19996 8.04098 1.54496 8.23098 1.89996 8.23098C2.05996 8.23098 2.22396 8.19298 2.37496 8.11098L3.10896 7.71498L4.69896 18.965C4.91496 20.179 6.00896 21.027 7.35896 21.027H16.641C17.991 21.027 19.085 20.179 19.303 18.939L20.891 7.71398L21.628 8.11198C22.113 8.37498 22.72 8.19398 22.982 7.70798C23.245 7.22198 23.062 6.61498 22.578 6.35298L22.58 6.34998ZM12 14.435C10.205 14.435 8.74996 12.98 8.74996 11.185C8.74996 9.38998 10.205 7.93498 12 7.93498C13.795 7.93498 15.25 9.38998 15.25 11.185C15.25 12.98 13.795 14.435 12 14.435Z"
        fill="#FF6600"
      />
    </svg>
  );
};

export const HomeIcon = () => {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.4602 5.56999L11.3572 0.114994C11.1342 -0.0050061 10.8672 -0.0050061 10.6442 0.114994L0.543237 5.56999C0.179237 5.76699 0.0432375 6.22199 0.240237 6.58699C0.375237 6.83699 0.634237 6.97999 0.900237 6.97999C1.02024 6.97999 1.14324 6.94999 1.25624 6.88999L2.07124 6.44999L3.70024 17.963C3.91424 19.178 5.00824 20.025 6.35824 20.025H15.6402C16.9922 20.025 18.0852 19.177 18.3032 17.938L19.9292 6.44799L20.7472 6.88999C21.1112 7.08299 21.5672 6.94999 21.7642 6.58599C21.9602 6.22299 21.8242 5.76799 21.4602 5.56999ZM16.8222 17.703C16.7152 18.309 16.1192 18.525 15.6422 18.525H6.36024C5.88024 18.525 5.28524 18.309 5.18224 17.727L3.48024 5.68999L11.0002 1.62799L18.5222 5.68799L16.8222 17.703Z"
        fill="#44444F"
      />
      <path
        d="M7.22021 10.184C7.22021 12.268 8.91521 13.964 11.0002 13.964C13.0852 13.964 14.7802 12.268 14.7802 10.184C14.7802 8.09999 13.0852 6.40399 11.0002 6.40399C8.91521 6.40399 7.22021 8.09999 7.22021 10.184ZM13.2802 10.184C13.2802 11.442 12.2582 12.464 11.0002 12.464C9.74221 12.464 8.72021 11.442 8.72021 10.184C8.72021 8.92599 9.74221 7.90399 11.0002 7.90399C12.2582 7.90399 13.2802 8.92599 13.2802 10.184Z"
        fill="#44444F"
      />
    </svg>
  );
};

//profile
export const ProfileIcon = () => {
  return (
    <svg
      width="18"
      height="21"
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 10.816C10.355 10.816 11.872 10.666 12.84 9.56001C13.654 8.63001 13.918 7.19201 13.646 5.16801C13.266 2.34301 11.529 0.656006 9 0.656006C6.471 0.656006 4.734 2.34301 4.354 5.17001C4.082 7.19201 4.346 8.63001 5.16 9.56001C6.128 10.667 7.645 10.816 9 10.816ZM5.84 5.36801C6.002 4.16801 6.627 2.15601 9 2.15601C11.373 2.15601 11.998 4.16901 12.16 5.36801C12.367 6.91801 12.217 7.99501 11.71 8.57301C11.255 9.09301 10.444 9.31601 9 9.31601C7.556 9.31601 6.745 9.09301 6.29 8.57301C5.783 7.99501 5.633 6.91701 5.84 5.36801ZM17.28 18.236C16.403 14.71 12.998 12.246 9 12.246C5.002 12.246 1.597 14.71 0.719997 18.236C0.547997 18.928 0.691997 19.636 1.115 20.176C1.523 20.696 2.155 20.996 2.848 20.996H15.152C15.845 20.996 16.477 20.696 16.885 20.176C17.309 19.636 17.452 18.929 17.279 18.236H17.28ZM15.704 19.252C15.578 19.412 15.388 19.498 15.152 19.498H2.848C2.613 19.498 2.422 19.413 2.296 19.252C2.159 19.078 2.116 18.84 2.176 18.598C2.886 15.743 5.693 13.748 9 13.748C12.307 13.748 15.114 15.742 15.824 18.598C15.884 18.84 15.841 19.078 15.704 19.252Z"
        fill="#44444F"
      />
    </svg>
  );
};

export const ProfileActiveIcon = () => {
  return (
    <svg
      width="17"
      height="21"
      viewBox="0 0 17 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.22501 10.165C6.86901 10.165 5.35301 10.015 4.38501 8.909C3.57101 7.979 3.30801 6.541 3.58001 4.517C3.96001 1.691 5.69601 0.0039978 8.22601 0.0039978C10.756 0.0039978 12.493 1.691 12.872 4.517C13.144 6.541 12.88 7.977 12.066 8.909C11.096 10.015 9.58101 10.164 8.22601 10.164L8.22501 10.165ZM14.074 20.015H2.37601C1.71301 20.015 1.12601 19.735 0.72601 19.229C0.30401 18.695 0.15001 17.959 0.31601 17.261C1.15001 13.731 4.40201 11.264 8.22401 11.264C12.046 11.264 15.298 13.73 16.134 17.261C16.298 17.959 16.144 18.695 15.722 19.228C15.322 19.733 14.737 20.013 14.074 20.013V20.015Z"
        fill="#FF6600"
      />
    </svg>
  );
};

//setting
export const SettingIcon = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0001 7.21002C8.91008 7.21002 7.21008 8.91002 7.21008 11C7.21008 13.09 8.91008 14.79 11.0001 14.79C13.0901 14.79 14.7901 13.09 14.7901 11C14.7901 8.91002 13.0901 7.21002 11.0001 7.21002ZM11.0001 13.29C9.73808 13.29 8.71008 12.264 8.71008 11C8.71008 9.73602 9.74008 8.71002 11.0001 8.71002C12.2601 8.71002 13.2901 9.73602 13.2901 11C13.2901 12.264 12.2621 13.29 11.0001 13.29Z"
        fill="black"
      />
      <path
        d="M11.36 21.375H10.638C9.45505 21.375 8.48405 20.487 8.37605 19.311L8.36205 19.164C8.33705 18.877 8.15505 18.631 7.89005 18.52C7.60405 18.4 7.30805 18.455 7.09205 18.635L6.97605 18.732C6.10805 19.457 4.72305 19.395 3.91605 18.592L3.40605 18.082C2.57005 17.242 2.51005 15.928 3.26605 15.022L3.36405 14.904C3.55005 14.682 3.59405 14.381 3.48605 14.117C3.37605 13.845 3.12805 13.663 2.84005 13.637L2.69005 13.623C1.51005 13.516 0.623047 12.543 0.623047 11.361V10.639C0.623047 9.456 1.51105 8.485 2.68705 8.377L2.84305 8.363C3.12805 8.338 3.37305 8.156 3.48505 7.89C3.59505 7.62 3.55005 7.317 3.36505 7.095L3.27105 6.979C2.51405 6.071 2.57305 4.756 3.40805 3.919L3.92005 3.407C4.72405 2.603 6.10805 2.542 6.98005 3.267L7.09605 3.365C7.31405 3.549 7.62405 3.595 7.88605 3.487C8.15605 3.375 8.33805 3.129 8.36305 2.844L8.37705 2.691C8.48405 1.511 9.45705 0.625 10.639 0.625H11.361C12.544 0.625 13.515 1.513 13.623 2.689L13.637 2.845C13.662 3.13 13.843 3.375 14.109 3.485C14.386 3.602 14.689 3.547 14.903 3.368L15.023 3.266C15.89 2.543 17.277 2.604 18.083 3.406L18.593 3.918C19.429 4.756 19.489 6.071 18.733 6.978L18.633 7.096C18.445 7.316 18.399 7.618 18.51 7.884C18.622 8.154 18.87 8.334 19.156 8.362L19.308 8.376C20.488 8.483 21.375 9.456 21.375 10.638V11.361C21.375 12.544 20.487 13.515 19.311 13.623L19.156 13.637C18.872 13.661 18.626 13.842 18.516 14.107C18.403 14.379 18.449 14.681 18.633 14.902L18.733 15.022C19.489 15.927 19.429 17.242 18.593 18.082L18.083 18.592C17.276 19.396 15.893 19.456 15.023 18.732L14.908 18.636C14.691 18.453 14.378 18.406 14.118 18.514C13.845 18.628 13.663 18.874 13.638 19.16L13.624 19.31C13.517 20.483 12.544 21.37 11.362 21.37L11.36 21.375ZM7.58705 16.955C7.88705 16.955 8.18005 17.015 8.45705 17.13C9.24705 17.458 9.78105 18.184 9.85705 19.026L9.87105 19.173C9.90805 19.573 10.238 19.873 10.641 19.873H11.363C11.763 19.873 12.093 19.573 12.131 19.173L12.145 19.025C12.221 18.183 12.755 17.458 13.537 17.133C14.33 16.803 15.233 16.951 15.87 17.483L15.983 17.577C16.161 17.725 16.349 17.757 16.476 17.757C16.682 17.757 16.876 17.677 17.022 17.53L17.532 17.02C17.816 16.736 17.837 16.29 17.58 15.982L17.48 15.862C16.938 15.212 16.803 14.322 17.128 13.539C17.454 12.749 18.18 12.219 19.022 12.142L19.177 12.128C19.574 12.091 19.877 11.761 19.877 11.358V10.636C19.877 10.236 19.574 9.906 19.175 9.868L19.023 9.854C18.177 9.776 17.453 9.244 17.128 8.461C16.802 7.673 16.938 6.783 17.481 6.134L17.581 6.016C17.838 5.706 17.817 5.26 17.533 4.976L17.023 4.466C16.877 4.319 16.683 4.239 16.477 4.239C16.35 4.239 16.162 4.271 15.985 4.419L15.865 4.519C15.231 5.047 14.315 5.189 13.543 4.873C12.755 4.546 12.223 3.821 12.146 2.977L12.132 2.822C12.097 2.425 11.767 2.122 11.365 2.122H10.642C10.242 2.122 9.91205 2.425 9.87405 2.824L9.86005 2.976C9.78405 3.819 9.25205 4.544 8.47005 4.869C7.68305 5.195 6.77705 5.052 6.14005 4.519L6.02205 4.423C5.84205 4.273 5.65405 4.243 5.52705 4.243C5.32105 4.243 5.12705 4.323 4.98105 4.469L4.46905 4.979C4.18705 5.263 4.16605 5.709 4.42305 6.017L4.52305 6.135C5.06305 6.788 5.20005 7.679 4.87505 8.46C4.54805 9.248 3.82305 9.78 2.98005 9.857L2.82405 9.871C2.42705 9.908 2.12405 10.238 2.12405 10.641V11.363C2.12405 11.763 2.42705 12.093 2.82605 12.131L2.97605 12.145C3.82405 12.223 4.54905 12.757 4.87305 13.541C5.19805 14.327 5.06305 15.216 4.52005 15.866L4.42405 15.981C4.16405 16.291 4.18605 16.737 4.47005 17.021L4.98005 17.531C5.12605 17.678 5.32005 17.758 5.52605 17.758C5.65305 17.758 5.84105 17.728 6.01805 17.578L6.13405 17.482C6.54005 17.146 7.05705 16.958 7.58705 16.958V16.955Z"
        fill="black"
      />
    </svg>
  );
};

export const SettingActiveIcon = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.36 21.375H10.638C9.45505 21.375 8.48405 20.487 8.37605 19.311L8.36205 19.164C8.33705 18.877 8.15505 18.631 7.89005 18.52C7.60405 18.4 7.30805 18.455 7.09205 18.635L6.97605 18.732C6.10805 19.457 4.72305 19.395 3.91605 18.592L3.40605 18.082C2.57005 17.242 2.51005 15.928 3.26605 15.022L3.36405 14.904C3.55005 14.682 3.59405 14.381 3.48605 14.117C3.37605 13.845 3.12805 13.663 2.84005 13.637L2.69005 13.623C1.51005 13.516 0.623047 12.543 0.623047 11.361V10.639C0.623047 9.456 1.51105 8.485 2.68705 8.377L2.84305 8.363C3.12805 8.338 3.37305 8.156 3.48505 7.89C3.59505 7.62 3.55005 7.317 3.36505 7.095L3.27105 6.979C2.51405 6.071 2.57305 4.756 3.40805 3.919L3.92005 3.407C4.72405 2.603 6.10805 2.542 6.98005 3.267L7.09605 3.365C7.31405 3.549 7.62405 3.595 7.88605 3.487C8.15605 3.375 8.33805 3.129 8.36305 2.844L8.37705 2.691C8.48405 1.511 9.45705 0.625 10.639 0.625H11.361C12.544 0.625 13.515 1.513 13.623 2.689L13.637 2.845C13.662 3.13 13.843 3.375 14.109 3.485C14.386 3.602 14.689 3.547 14.903 3.368L15.023 3.266C15.89 2.543 17.277 2.604 18.083 3.406L18.593 3.918C19.429 4.756 19.489 6.071 18.733 6.978L18.633 7.096C18.445 7.316 18.399 7.618 18.51 7.884C18.622 8.154 18.87 8.334 19.156 8.362L19.308 8.376C20.488 8.483 21.375 9.456 21.375 10.638V11.361C21.375 12.544 20.487 13.515 19.311 13.623L19.156 13.637C18.872 13.661 18.626 13.842 18.516 14.107C18.403 14.379 18.449 14.681 18.633 14.902L18.733 15.022C19.489 15.927 19.429 17.242 18.593 18.082L18.083 18.592C17.276 19.396 15.893 19.456 15.023 18.732L14.908 18.636C14.691 18.453 14.378 18.406 14.118 18.514C13.845 18.628 13.663 18.874 13.638 19.16L13.624 19.31C13.517 20.483 12.544 21.37 11.362 21.37L11.36 21.375ZM7.20996 11C7.20996 8.90996 8.90996 7.20996 11 7.20996C13.09 7.20996 14.79 8.90996 14.79 11C14.79 13.09 13.09 14.79 11 14.79C8.90996 14.79 7.20996 13.09 7.20996 11ZM8.70996 11C8.70996 12.264 9.73796 13.29 11 13.29C12.262 13.29 13.29 12.264 13.29 11C13.29 9.73596 12.26 8.70996 11 8.70996C9.73996 8.70996 8.70996 9.73596 8.70996 11Z"
        fill="#FF6600"
      />
    </svg>
  );
};

//tweetIcon
export const TweetIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.8 7.2H5.6V3.9C5.6 3.5 5.3 3.1 4.8 3.1C4.3 3.1 4.1 3.5 4.1 3.9V7.2H0.8C0.4 7.2 0 7.5 0 8C0 8.5 0.3 8.8 0.8 8.8H4.1V12.1C4.1 12.5 4.4 12.9 4.9 12.9C5.4 12.9 5.7 12.6 5.7 12.1V8.7H9C9.4 8.7 9.8 8.4 9.8 7.9C9.8 7.4 9.3 7.2 8.8 7.2ZM23.8 2.3V2.2H23.7C23.6 2.2 14.5 3.4 9.3 13.9C5.5 21.5 5.7 23.8 6 23.8C6.3 23.9 9.4 17.3 12.7 14.6C17.9 13.5 19.3 11 19.3 11C19.3 11 17.8 11.2 17.2 11.2C16.4 11.2 15.8 11 15.5 10.9C16.8 9.7 17.9 9.4 19 9.2C19.9 9 20.8 8.8 22 8C24.2 6.4 23.9 2.5 23.8 2.3Z"
        fill="white"
      />
    </svg>
  );
};

//logout
export const LogOutIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H8C8.26522 18 8.51957 17.8946 8.70711 17.7071C8.89464 17.5196 9 17.2652 9 17C9 16.7348 8.89464 16.4804 8.70711 16.2929C8.51957 16.1054 8.26522 16 8 16H3C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H8C8.26522 2 8.51957 1.89464 8.70711 1.70711C8.89464 1.51957 9 1.26522 9 1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0H3Z"
        fill="#44444F"
      />
      <path
        d="M12.293 4.29303C12.4805 4.10556 12.7348 4.00024 13 4.00024C13.2652 4.00024 13.5195 4.10556 13.707 4.29303L17.707 8.29303C17.8945 8.48056 17.9998 8.73487 17.9998 9.00003C17.9998 9.26519 17.8945 9.5195 17.707 9.70703L13.707 13.707C13.5184 13.8892 13.2658 13.99 13.0036 13.9877C12.7414 13.9854 12.4906 13.8803 12.3052 13.6948C12.1198 13.5094 12.0146 13.2586 12.0123 12.9964C12.01 12.7342 12.1108 12.4816 12.293 12.293L14.586 10H7C6.73478 10 6.48043 9.89467 6.29289 9.70714C6.10536 9.5196 6 9.26525 6 9.00003C6 8.73481 6.10536 8.48046 6.29289 8.29292C6.48043 8.10539 6.73478 8.00003 7 8.00003H14.586L12.293 5.70703C12.1055 5.5195 12.0002 5.26519 12.0002 5.00003C12.0002 4.73487 12.1055 4.48056 12.293 4.29303Z"
        fill="#44444F"
      />
    </svg>
  );
};

const UserSidebar = ({ userData }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const urlUserId = pathname.split("/")[1];
  const urlItem = pathname.split("/")[2];
  //判斷是否為首頁
  const isHome = urlItem !== "profile" && urlItem !== "setting";
  //logo out Context
  const { logout } = useAuth();
  //取得使用者id
  const token = localStorage.getItem("token");
  const userId = jwt_decode(token).id;

  return (
    <nav className={`${styles["nav"]} pt-3`}>
      <div className="d-flex justify-content-center d-lg-none">
        <LogoIcon size={32} />
      </div>
      <div className="ps-2 d-none d-lg-block">
        <LogoIcon />
      </div>
      <ul className="pt-3 d-flex flex-column list-unstyled align-items-center align-items-lg-start">
        <li className={styles["list-item"]}>
          <Link to={`/${userId}`}>
            <div className="d-flex gap-3 fw-bold">
              {isHome ? <HomeActiveIcon /> : <HomeIcon />}

              <p className={`${isHome && "text-primary"} d-none d-lg-block`}>
                首頁
              </p>
            </div>
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link to={`/${userId}/profile`}>
            <div className="d-flex gap-3 fw-bold text-light">
              {urlItem === "profile" ? <ProfileActiveIcon /> : <ProfileIcon />}
              <p
                className={`${
                  urlItem === "profile" ? "text-primary" : ""
                } d-none d-lg-block`}
              >
                個人資料
              </p>
            </div>
          </Link>
        </li>
        <li className={`${styles["list-item"]} mb-1`}>
          <Link to={`/${urlUserId}/setting`}>
            <div className="d-flex gap-3 fw-bold text-light">
              {urlItem === "setting" ? <SettingActiveIcon /> : <SettingIcon />}
              <p
                className={`${
                  urlItem === "setting" ? "text-primary" : ""
                } d-none d-lg-block`}
              >
                設定
              </p>
            </div>
          </Link>
        </li>
        <li className="w-100">
          <MainTweetModal
            userData={userData}
            element={
              <div className="d-flex flex-column align-items-center">
                <button className="d-none d-lg-block btn btn-primary text-white rounded-pill w-100 text-center">
                  推文
                </button>
                <button className="d-flex d-lg-none btn btn-primary rounded-circle p-1">
                  <TweetIcon />
                </button>
              </div>
            }
          />
        </li>
        <li
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className={`${styles["logout"]}`}
        >
          <div className="d-flex gap-2 align-items-center pb-3">
            <div className="d-flex justify-content-center">
              <LogOutIcon />
            </div>
            <p className="d-none d-lg-block">登出</p>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default UserSidebar;
