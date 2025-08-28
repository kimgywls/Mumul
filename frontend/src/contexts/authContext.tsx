import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface AuthContextType {
    token: string | null;
    saveToken: (token: string) => void;
    removeToken: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [token, setToken] = useState<string | null>(null);
    const router = useRouter();

    // 예외 페이지 배열
    const exceptionPages = ['/', '/storeIntroduction/[slug]', '/publicIntroduction/[slug]', '/corpIntroduction/[slug]', '/storeIntroductionExample/[slug]',
        '/timeline', '/news', '/notice', '/faq', '/signupType',
        '/signupStep1', '/signupStep2', '/signupPublicStep1', '/signupPublicStep2',
        '/signupCorpStep1', '/signupCorpStep2', '/mainPageForCorp',
        '/findAccount', '/findAccountResult', '/registerPublic',
        '/complaintRegister', '/complaintStatusLookup'
        , '/subscriptionPlansIntroduce', '/terms-of-service',
    ];

    useEffect(() => {
        if (typeof window !== 'undefined' && !window.ReactNativeWebView) {
            const storedToken = sessionStorage.getItem('token');
            const isExceptionPage =
                router.pathname === '/_error' || // 에러 페이지
                exceptionPages.some((path) => {
                    // [slug]와 같은 동적 경로를 처리하기 위해 정규식을 포함한 비교
                    const dynamicPathRegex = new RegExp(`^${path.replace(/\[.*?\]/g, '[^/]+')}$`);
                    return dynamicPathRegex.test(router.pathname);
                });

            if (storedToken) {
                setToken(storedToken);
            } else if (!isExceptionPage) {
                router.push('/login'); // 토큰 없고, 예외 경로가 아니면 로그인 페이지로 이동
            }
        }
    }, [router.pathname]);

    const saveToken = (newToken: string) => {
        setToken(newToken);
        if (typeof window !== 'undefined' && !window.ReactNativeWebView) {
            sessionStorage.setItem('token', newToken);
        }
    };

    const removeToken = () => {
        setToken(null);
        if (typeof window !== 'undefined' && !window.ReactNativeWebView) {
            sessionStorage.removeItem('token');
        }
    };

    return (
        <AuthContext.Provider value={{ token, saveToken, removeToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 