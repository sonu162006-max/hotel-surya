import React from 'react';

export interface NavItem {
    label: string;
    href: string;
}

export interface RoomType {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
    features: string[];
}

export interface ServiceType {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface OfferType {
    id: number;
    title: string;
    description: string;
    discount: string;
    code: string;
}