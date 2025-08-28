// 공통 컴포넌트 타입 정의

export interface BaseComponentProps {
    className?: string;
    children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
    size?: 'sm' | 'md' | 'lg';
}

export interface InputProps extends BaseComponentProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel';
    required?: boolean;
    disabled?: boolean;
    error?: string;
}

export interface ModalProps extends BaseComponentProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
}

export interface StoreData {
    id: string;
    name: string;
    address: string;
    phone: string;
    description?: string;
    imageUrl?: string;
    category?: string;
    rating?: number;
    reviewCount?: number;
    store_name?: string;
    store_address?: string;
    store_category?: string;
    store_introduction?: string;
    agent_id?: string;
    banner?: string;
}

export interface MenuItem {
    id: string;
    name: string;
    price: number;
    description?: string;
    imageUrl?: string;
    category?: string;
    isAvailable: boolean;
    allergens?: string[];
}

export interface UserData {
    id: string;
    name: string;
    email: string;
    phone?: string;
    role: 'store' | 'public' | 'corp';
    profileImage?: string;
    subscription?: {
        id: string;
        is_active: boolean;
    };
}

export interface ComplaintData {
    id: string;
    title: string;
    content: string;
    status: 'pending' | 'in_progress' | 'resolved' | 'rejected';
    createdAt: string;
    updatedAt: string;
    category: string;
    priority: 'low' | 'medium' | 'high';
    name?: string;
}

export interface SubscriptionData {
    id: string;
    planName: string;
    price: number;
    billingCycle: 'monthly' | 'yearly';
    status: 'active' | 'inactive' | 'cancelled';
    startDate: string;
    endDate?: string;
    features: string[];
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    totalItems?: number;
    itemsPerPage?: number;
}

export interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    text?: string;
}

export interface AlertProps {
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    onClose?: () => void;
    duration?: number;
}

export interface BadgeProps {
    variant: 'default' | 'secondary' | 'destructive' | 'outline';
    children: React.ReactNode;
}

export interface CardProps extends BaseComponentProps {
    title?: string;
    subtitle?: string;
    imageUrl?: string;
    onClick?: () => void;
    hoverable?: boolean;
}

export interface TableProps {
    headers: string[];
    data: Record<string, any>[];
    onRowClick?: (row: Record<string, any>) => void;
    sortable?: boolean;
    onSort?: (column: string, direction: 'asc' | 'desc') => void;
}

export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface SelectProps {
    options: SelectOption[];
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    multiple?: boolean;
}

export interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
}

export interface LabelProps extends BaseComponentProps {
    htmlFor?: string;
    required?: boolean;
}

export interface BannerProps {
    title: string;
    subtitle?: string;
    imageUrl?: string;
    actionText?: string;
    onAction?: () => void;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

export interface FormData {
    username?: string;
    password?: string;
    name?: string;
    dob?: string;
    phone?: string;
    email?: string;
    store_category?: string;
    store_name?: string;
    store_address?: string;
    marketingAccepted?: boolean;
    termsAccepted?: boolean;
}

export interface InstitutionData {
    public_id: string;
    public_name: string;
    public_tel: string;
    public_address: string;
}

export interface PlanData {
    id: string;
    name: string;
    price: number;
    features: string[];
}

export interface TimelineData {
    period: string;
    awards?: Array<{ content: string }>;
    history?: Array<{ content: string }>;
}

export interface TimelineEventProps {
    content: string;
    type: 'award' | 'history';
    showIndicator?: boolean;
}

export interface YearMarkerProps {
    period: string;
    onClick: () => void;
    isOpen: boolean;
}

export interface CardComponentProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    onClick: () => void;
}

// Window 객체 확장
declare global {
    interface Window {
        ReactNativeWebView?: any;
        KCP_Pay_Execute_Web?: any;
    }
}

export { }; 