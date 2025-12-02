import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
}

export interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}