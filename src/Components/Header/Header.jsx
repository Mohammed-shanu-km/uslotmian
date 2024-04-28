import React, { useState } from "react";
import './Header.css'
import logo from '../../Assets/Isolation_Mode.svg'
import { IoCloseOutline } from "react-icons/io5";
import profileimage from '../../Assets/profile.svg'
import { Dropdown } from 'primereact/dropdown';
import { useRecoilState } from "recoil";
import { selectedLang } from "../../utils/recoil";
import { MdLanguage } from "react-icons/md";

const Header = () => {
  const [lang, setLang] = useRecoilState(selectedLang);
    const cities = [
        { name: 'English', code: 'en' },
        { name: 'Hindi', code: 'hi' },
        { name: 'Malayalam', code: 'mal' },
    ];

  return (
    <div className="quizsection-main">
      <div className="quiz-section-header">
        <div className="quiz-section-logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-buttons">
          <div className="flex items-center px-2 bg-white rounded-md">
            <MdLanguage size={40} color="#1c75bc"/>
            <Dropdown value={lang} onChange={(e) => setLang(e.value)} options={cities} optionLabel="name" 
                placeholder="Select Language" className="w-full px-6 py-4 text-[16px ] " 
                style={{ fontSize: "16px", fontWeight: "500", color: "black" }} />
          </div>
          <div className="profile-buttons">
            <button>
              Username
              <img src={profileimage} alt="" />
            </button>
          </div>
          <button className="close-btns">
            <IoCloseOutline style={{ fontSize: "30px" }} />
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
