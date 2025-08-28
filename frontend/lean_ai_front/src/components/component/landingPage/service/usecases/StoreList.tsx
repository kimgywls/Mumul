"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight } from "lucide-react";

const StoreList = ({ stores, activeId, onSelect, getIconComponent, variants, isMobile }) => {
  // 모바일 환경에 맞는 컴포넌트
  if (isMobile) {
    return (
      <motion.div
        className="w-full"
        variants={variants.container}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-4 bg-indigo-500">
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "NanumSquareExtraBold" }}>
              도입 매장 목록
            </h3>
          </div>
          <div className="divide-y divide-indigo-100 max-h-[70vh] overflow-y-auto">
            {stores.map((store) => {
              const isActive = store.id === activeId;
              const Icon = getIconComponent(store.icon);
              return (
                <motion.div
                  key={store.id}
                  variants={variants.item}
                  onClick={() => onSelect(store.id)}
                  className={`p-3 cursor-pointer transition-all duration-200 active:bg-indigo-50 flex items-center justify-between ${
                    isActive ? "bg-indigo-50" : ""
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isActive ? "bg-indigo-500 text-white" : "bg-indigo-100 text-indigo-500"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 
                        className={`font-bold text-sm ${isActive ? "text-indigo-700" : "text-gray-700"}`}
                        style={{ fontFamily: "NanumSquareExtraBold" }}
                      >
                        {store.name.split("\n")[0]}
                      </h4>
                      {store.name.split("\n")[1] && (
                        <p className="text-xs text-gray-500">{store.name.split("\n")[1]}</p>
                      )}
                      <div className="mt-1 flex items-center gap-2">
                        <div className="flex items-center text-xs text-gray-600">
                          <MapPin className="w-3 h-3 mr-0.5 text-indigo-400" />
                          {store.location?.split(" ").slice(0, 1).join(" ") || "서울"}
                        </div>
                        <div className="flex items-center text-xs text-gray-600">
                          <Calendar className="w-3 h-3 mr-0.5 text-indigo-400" />
                          {store.month || "3개월"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <ChevronRight 
                    className={`w-4 h-4 ${isActive ? "text-indigo-500" : "text-gray-400"}`} 
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    );
  }

  // 기존 데스크탑 환경 컴포넌트
  return (
    <motion.div
      className="w-full lg:w-1/3"
      variants={variants.container}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-6 bg-indigo-500">
          <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "NanumSquareExtraBold" }}>
            도입 매장 목록
          </h3>
        </div>
        <div className="divide-y divide-indigo-100">
          {stores.map((store) => {
            const isActive = store.id === activeId;
            const Icon = getIconComponent(store.icon);
            return (
              <motion.div
                key={store.id}
                variants={variants.item}
                onClick={() => onSelect(store.id)}
                className={`p-5 cursor-pointer transition-all duration-300 ${isActive ? "bg-indigo-50" : "hover:bg-indigo-50/50"}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isActive ? "bg-indigo-500 text-white" : "bg-indigo-100 text-indigo-500"}`}
                    style={{ boxShadow: isActive ? "0 10px 15px -3px rgba(99, 102, 241, 0.2)" : "none" }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-lg ${isActive ? "text-indigo-700" : "text-gray-700"}`} style={{ fontFamily: "NanumSquareExtraBold" }}>
                      {store.name.split("\n")[0]}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{store.name.split("\n")[1] || ""}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-indigo-500" />
                        {store.location?.split(" ").slice(0, 2).join(" ") || "서울"}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-3.5 h-3.5 mr-1 text-indigo-500" />
                        {store.month || "3개월"}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default StoreList;