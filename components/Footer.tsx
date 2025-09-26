"use client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useContext } from "react";
import { Container } from "react-bootstrap";
import { footerTranslations } from "@/translations"; // Adjust the import path as necessary
import { LanguageContext } from "@/context/LanguageContext"; // Adjust the import path as necessary

const Footer: FC = () => {
  const { language } = useContext(LanguageContext);
  const currentYear = new Date().getFullYear();
  const t = footerTranslations[language] || footerTranslations["en"]; // Fallback to English

  return (
    <footer className="pt-3 pb-1 mt-5 shadow-lg">
      <Container>
        <p className="text-center">
          &copy; {currentYear}{" "}
          <a
            className="font-weight-bold text-decoration-none"
            href="https://tungpham42.github.io"
            target="_blank"
            rel="noreferrer"
          >
            Phạm Tùng
          </a>
          {", "}
          <a
            href="https://github.com/tungpham42/mausac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <FontAwesomeIcon icon={faGithub} className="me-1" />
            MIT License
          </a>
        </p>
        <div className="text-center mt-3">
          <h5>{t.explore_more}</h5>
          <ul className="list-unstyled d-flex flex-wrap justify-content-center">
            <li className="mx-2">
              <a
                href="https://cotuong.top/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.chinese_chess}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://json.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.json_tools}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://css.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.css_tools}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://tool.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.general_tools}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://caro.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.caro_game}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://srt.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.srt_tools}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://phim.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.movies}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://boi.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.fortune_telling}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://disc.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.disc_assessment}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://tratu.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.dictionary_lookup}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://mbti.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.mbti_test}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://ikigai.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.ikigai}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://talent.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.talent_assessment}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://qr.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.qr_code_tools}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://dongdat.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.earthquake_info}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://luong.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.salary}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://clifton.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.clifton_strengths}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://holland.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.holland_code}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://math.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.math_tools}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://chill.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.chill}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://speech.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.speech_tools}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://bmi.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.bmi_calculator}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://timer.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.timer}
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://forex.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t.forex_tools}
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
