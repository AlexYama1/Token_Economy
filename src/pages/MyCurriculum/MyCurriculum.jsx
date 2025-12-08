import React from 'react';
import ModuleList from './components/ModuleList';
import LessonView from './components/LessonView';
import QuizCard from './components/QuizCard';
import './MyCurriculum.css';

const MyCurriculum = () => {
    return (
        <div className="curriculum-container">
            <div className="curr-sidebar">
                <ModuleList />
            </div>
            <div className="curr-content">
                <LessonView />
                <QuizCard />
            </div>
        </div>
    );
};

export default MyCurriculum;
