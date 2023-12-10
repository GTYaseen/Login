import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import {
  AiFillAudio,
  AiFillApi,
  AiFillClockCircle,
  AiFillDelete,
  AiFillFacebook,
  AiFillFolderOpen,
  AiFillInstagram,
} from "react-icons/ai";
import PropTypes from 'prop-types';

const iconComponents = {
  search: <IoIosSearch />,
  outLineHeart: <FaRegHeart />,
  fillLineHeart: <FaHeart />,
  MicroPhone: <AiFillAudio />,
  DisConnect: <AiFillApi />,
  Clock: <AiFillClockCircle />,
  Trash: <AiFillDelete />,
  FaceBook: <AiFillFacebook />,
  instagram: <AiFillInstagram />,
  folder: <AiFillFolderOpen />,
};

function IconButton({ icon, size, type }) {
  let fontSize, color;

  if (size === "small") {
    fontSize = "13px";
  } else if (size === "medium") {
    fontSize = "16px";
  } else if (size === "large") {
    fontSize = "22px";
  }

  color = type === "secondary" ? "#ff1f1f" : type === "primary" ? "#FFFFFFF" : "#000000";

  return React.cloneElement(iconComponents[icon], {
    style: { fontSize, color },
  });
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

export default IconButton;
