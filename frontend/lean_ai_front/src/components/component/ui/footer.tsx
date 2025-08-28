import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Mail, Smartphone, Building } from "lucide-react";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-gray-900 text-white hidden md:block">
      <div className="container md:mx-auto px-6 md:px-0 py-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl font-bold">MUMUL</h2>
              <p className="text-gray-400 whitespace-nowrap">
                AI 기반 고객 질문 관리 및 응대 솔루션을
                <br /> 제공하는 서비스입니다.
              </p>
            </div>
            <div className="text-sm text-gray-400 space-y-1">
              <p>상호명: 주식회사 린에이아이</p>
              <p>사업자등록번호: 315-87-00617</p>
              <p>대표자: 김하연</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/?section=company"
                  className="hover:text-indigo-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/?section=service"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/signupType"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Signup
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">고객지원</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-indigo-400 transition-colors"
                >
                  자주 묻는 질문(FAQ)
                </Link>
              </li>
              <li>
                <Link
                  href="/notice"
                  className="hover:text-indigo-400 transition-colors"
                >
                  공지사항
                </Link>
              </li>
              <li>
                <div
                  className="hover:text-indigo-400 transition-colors"
                  onClick={() =>
                    router.push(
                      "https://docs.google.com/forms/d/e/1FAIpQLSfrPgaIfdHYLW6CO9cSbr4s-JqtWy2zkyAb1XEjqXClFITTIw/viewform"
                    )
                  }
                >
                  도입 문의
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">질문</h3>
            <div className="grid grid-row-3 md:flex md:flex-col md:space-y-4 text-gray-400">
              <a
                href="mailto:ch@lean-ai.com"
                className="flex items-center hover:text-indigo-400 transition-colors"
              >
                <Mail size={24} className="mr-2" />
                <span>ch@lean-ai.com</span>
              </a>
              <div className="flex items-center hover:text-indigo-400 transition-colors">
                <Smartphone size={24} className="mr-2" />
                <span>02-6951-1510</span>
              </div>
              <div className="flex items-center hover:text-indigo-400 transition-colors">
                <Building size={24} className="mr-2" />
                <span className="text-sm">
                  서울특별시 관악구 봉천로 545, <br /> 서울창업센터 관악 201호
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-2 border-t border-gray-700 flex flex-col md:flex-row gap-10 items-center justify-center w-full">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} MUMUL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
