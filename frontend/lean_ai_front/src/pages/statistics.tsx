import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useAuth } from "@/contexts/authContext";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN;

const Statistics = () => {
  const router = useRouter();
  const { token } = useAuth();

  const [statisticsData, setStatisticsData] = useState([]); // 통계 데이터 상태
  const [isLoadingStatistics, setIsLoadingStatistics] = useState(true); // 로딩 상태
  const [imageUrl, setImageUrl] = useState(null); // 이미지 URL 상태

  useEffect(() => {
    fetchStatistics();
  }, []);

  // 통계 데이터 API 호출
  const fetchStatistics = async () => {
    try {
      const response = await fetch(`${API_DOMAIN}/api/statistics/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      //console.log("data:", data); // 응답 데이터 로그

      if (response.ok && data.status === "success") {
        setStatisticsData(data.data); // 통계 데이터를 상태에 저장
        setImageUrl(data.image_url); // 이미지 URL 상태에 저장
      } else {
        console.error("Failed to fetch data:", data); // 실패 로그
        setStatisticsData(null); // 데이터가 없으면 null로 설정
      }
    } catch (error) {
      console.error("Error in fetchStatistics:", error); // 오류 로그
      setStatisticsData(null); // 오류 발생 시 데이터 없음으로 설정
    } finally {
      setIsLoadingStatistics(false); // 로딩 상태를 완료로 설정
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 font-sans bg-violet-50">
      <div
        className="max-w-4xl mx-auto py-12 px-6 shadow-md rounded-lg"
        style={{ backgroundColor: "#fff", borderRadius: "50px 0 50px 0" }}
      >
        <div className="flex items-center mb-8">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ChevronLeft
              className="h-8 w-8 text-indigo-700 cursor-pointer mr-2"
              onClick={() => router.back()}
            />
          </motion.div>
          <h1
            className="text-3xl font-bold text-center text-indigo-600"
            style={{ fontFamily: "NanumSquareExtraBold" }}
          >
            통계 및 분석
          </h1>
        </div>
        <div className="flex flex-col space-y-5 px-5">
          <h2
            className="text-2xl font-bold text-start text-gray-600"
            style={{ fontFamily: "NanumSquareExtraBold" }}
          >
            - 리뷰 및 피드백
          </h2>
          <img src="/리뷰 및 피드백 워드 클라우드.png" className="h-[60vh]"/>
        </div>
        {/* 통계 데이터 표시 
        {isLoadingStatistics ? (
          <p>데이터 로딩 중...</p>
        ) : (
          <>
            {statisticsData ? (
              <ul className="text-gray-700 px-0 md:px-4 space-y-2">
                {statisticsData.map((stat, index) => (
                  <li key={index} className="text-gray-800 font-semibold">
                    {index + 1}. {stat.utterance} - {stat.count}회
                  </li>
                ))}
              </ul>
            ) : (
              <p>데이터가 준비 중입니다.</p>
            )}*/}

        {/* 이미지 표시
            {imageUrl && (
              <div className="mt-8 text-center">
                <img
                  src={`${API_DOMAIN}${imageUrl}`} // 절대 URL을 구성해 이미지 렌더링
                  alt="최다 질문 통계"
                  className="mx-auto shadow-md rounded-lg"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            )}
          </>
        )} */}
      </div>
    </div>
  );
};

export default Statistics;
