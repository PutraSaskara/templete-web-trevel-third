import {
    Users,
    Leaf,
    Settings,
    Smile,
    BadgeCheck,
    MapPin,
    Compass,
    Edit,
    Plane,
    Star,
    Shield,
    Wine,
    Mountain,
    Tent,
    Globe,
    Headphones,
    CreditCard,
    Heart,
    Camera,
    Sun,
    Moon,
    Check,
    ChevronRight,
    Menu,
    X,
    Search,
    Phone,
    Mail,
    Clock,
    Calendar,
    ArrowRight,
    Play,
} from 'lucide-react';

const iconMap = {
    Users,
    Leaf,
    Settings,
    Smile,
    BadgeCheck,
    MapPin,
    Compass,
    Edit,
    Plane,
    Star,
    Shield,
    Wine,
    Mountain,
    Tent,
    Globe,
    Headphones,
    CreditCard,
    Heart,
    Camera,
    Sun,
    Moon,
    Check,
    ChevronRight,
    Menu,
    X,
    Search,
    Phone,
    Mail,
    Clock,
    Calendar,
    ArrowRight,
    Play,
};

export function getIcon(name, props = {}) {
    const IconComponent = iconMap[name];
    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in iconMap`);
        return null;
    }
    return <IconComponent {...props} />;
}

export default iconMap;
