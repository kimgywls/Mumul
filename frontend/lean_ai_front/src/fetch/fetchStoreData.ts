import axios from 'axios';
 
const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN;

export const fetchStoreData = async ({ slug, storeID }, token, setStoreData, setErrorMessage, setShowErrorMessageModal) => {
  try {

    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
  };

    let response;

    // slug 또는 storeID에 따라 URL 및 메서드 분기
    if (slug) {
            // slug 기반 요청
            response = await axios.get(
                `${API_DOMAIN}/api/stores/detail_by_slug/`,
                {
                    headers,
                    params : {slug: decodeURIComponent(slug)},
                }
            );
        } else if (storeID) {
            // storeID 기반 요청
            response = await axios.get(
                `${API_DOMAIN}/api/stores/${storeID}/`,
                {
                    headers,
                }
            );
        } else {
            throw new Error('slug 또는 storeID가 필요합니다.');
        }

    // 성공 응답 처리
    if (response?.status === 200 && response.data) {
      //console.log('fetchStoreData - store data:', response.data);
      setStoreData(response.data);
    } else {
      throw new Error('매장 정보를 찾을 수 없습니다.');
    }
  } catch (error) {
    console.error('fetchStoreData - error:', error);

    if (error.response) {
      const serverMessage =
        error.response.data?.error || '서버에서 에러가 발생했습니다.';
      setErrorMessage(serverMessage);
    } else if (error.message.includes('Network Error')) {
      setErrorMessage(
        '서버와 연결할 수 없습니다. 인터넷 연결을 확인하거나 나중에 다시 시도하세요.'
      );
    } else {
      setErrorMessage(
        '매장 정보를 가져오는 중 문제가 발생했습니다. 관리자에게 문의하세요.'
      );
    }

    setShowErrorMessageModal(true);
  }
};
