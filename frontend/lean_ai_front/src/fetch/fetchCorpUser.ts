import axios from 'axios';
 
const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN;

export const fetchCorpUser = async ({ slug, storeID }, token, setUserData, setErrorMessage, setShowErrorMessageModal) => {
    try {
      const payload = slug ? { slug: decodeURIComponent(slug) } : { store_id: storeID };
      const headers = {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      };
  
      const response = await axios.post(`${API_DOMAIN}/corp/user-profile/`, payload, { headers });
  
      if (response.status === 200 && response.data) {
        //console.log("response data : ", response.data);
        
        // 데이터 검증
        if (!response.data.name || !response.data.user_id) {
          throw new Error("잘못된 사용자 데이터입니다.");
        }
        setUserData(response.data);
      } else {
        throw new Error("해당 기업 정보를 찾을 수 없습니다. 관리자에게 문의하세요.");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        (error.message.includes("Network Error")
          ? "서버와 연결할 수 없습니다. 인터넷 연결을 확인하세요."
          : "기업 정보를 가져오는 중 문제가 발생했습니다. 관리자에게 문의하세요.");
      setErrorMessage(errorMessage);
      setShowErrorMessageModal(true);
    }
  };
  
