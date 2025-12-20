import React, { useState } from 'react';
import TodoCard from '../TodoCard/TodoCard';
import mockTrelloTasks from '../TodoCard/MockData';
import './Home.css'; // 確保這就是你上面那份 CSS 的檔名

const HomeContent = ({ name, xp, level, onTaskComplete }) => {
    const [tasks, setTasks] = useState(mockTrelloTasks);
    const [inputValue, setInputValue] = useState('');

    const taskComplete = (taskId) => {
        const targetTask = tasks.find(t => t.id === taskId);
        if (!targetTask) return;

        if (onTaskComplete) {
            onTaskComplete(targetTask.xpValue || 20);
        }

        setTasks(prevTasks => 
            prevTasks.map(task =>
                task.id === taskId ? { ...task, isCompleted: true } : task
            )
        );
        alert(`任務:「${targetTask.title}」已完成！獲得經驗值！`);
    };

    const addTask = () => {
        if (!inputValue) return;
        const newTask = {
            id: Date.now(),
            title: inputValue,
            xpValue: 20,
            isCompleted: false
        };
        setTasks([...tasks, newTask]);
        setInputValue('');
    };

    return (
        /* 外層對應 .main-content，實現左右分割 */
        <div className="main-content">
            
            {/* 左側：遊戲養成區域 */}
            <section className="game-area">
                <h2>🎮 遊戲進度</h2>
                
                {/* 經驗值條面板 (我們沿用之前的結構，但放在 game-area 內) */}
                <div className="stat-panel" style={{ background: '#ced5deff', color: 'white', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                        <span>Lv. {level}</span>
                        <span>{xp} / 100 XP</span>
                    </div>
                    <div style={{ width: '100%', height: '10px', background: '#7a797986', borderRadius: '5px', marginTop: '8px', overflow: 'hidden' }}>
                        <div style={{ width: `${xp}%`, height: '100%', background: '#50728fff', transition: 'width 0.3s' }}></div>
                    </div>
                </div>

                <div className="placeholder" style={{ border: '2px dashed #ccc', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                    角色/進度條佔位圖
                </div>
            </section>

            {/* 右側：代辦清單區域 */}
            <section className="todo-list-area">
                <h2>📋 待辦清單</h2>
                
                {/* 新增任務區 */}
                <div className="add-task-section" style={{ marginBottom: '20px', padding: '15px', background: '#f9f9f9', borderRadius: '8px' }}>
                    <input 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="新增任務..."
                        style={{ width: '40%', padding: '5px' }}
                    />
                    <input 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="新增任務..."
                        style={{ width: '40%', padding: '5px' }}
                    />
                    <button onClick={addTask} style={{ marginLeft: '5px' }}>發佈</button>
                </div>

                <div className="card-list">
                    {/* 只顯示未完成任務 */}
                    {tasks.filter(t => !t.isCompleted).map(task => (
                        <TodoCard 
                            key={task.id} 
                            task={task} 
                            onComplete={taskComplete} 
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomeContent;