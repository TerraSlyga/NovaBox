import { useState, useEffect } from "react";

export default function DailyTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [completedTasks, setCompletedTasks] = useState(new Set());

  // Завантаження завдань з API при першому рендері
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://dummyjson.com/todos?limit=10");

        if (!response.ok) {
          throw new Error(`Помилка HTTP: ${response.status}`);
        }

        const data = await response.json();
        setTasks(data.todos || []);
      } catch (err) {
        setError(
          err.message || "Не вдалося завантажити завдання. Спробуйте пізніше.",
        );
        console.error("Помилка при завантаженні завдань:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Обробка відмітки завдання як виконане
  const toggleTaskCompletion = (taskId) => {
    setCompletedTasks((prev) => {
      const next = new Set(prev);
      next.has(taskId) ? next.delete(taskId) : next.add(taskId);
      return next;
    });
  };

  // Статус завантаження
  if (loading) {
    return (
      <section className="daily-tasks__section">
        <h2 className="daily-tasks__title">📋 Завдання дня</h2>
        <div className="daily-tasks__loading">
          <div className="spinner"></div>
          <p>Завантаження завдань...</p>
        </div>
      </section>
    );
  }

  // Статус помилки
  if (error) {
    return (
      <section className="daily-tasks__section">
        <h2 className="daily-tasks__title">📋 Завдання дня</h2>
        <div className="daily-tasks__error">
          <p>❌ {error}</p>
          <button
            className="daily-tasks__retry-btn"
            onClick={() => window.location.reload()}
          >
            Спробувати ще раз
          </button>
        </div>
      </section>
    );
  }

  // Статус успіху
  return (
    <section className="daily-tasks__section">
      <h2 className="daily-tasks__title">📋 Завдання дня</h2>
      <p className="daily-tasks__subtitle">
        Рекомендовані завдання на день ({tasks.length})
      </p>

      {tasks.length === 0 ? (
        <div className="daily-tasks__empty">
          <p>На сьогодні немає завдань 🎉</p>
        </div>
      ) : (
        <div className="daily-tasks__grid">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`daily-tasks__card ${
                completedTasks.has(task.id)
                  ? "daily-tasks__card--completed"
                  : ""
              }`}
            >
              <div className="daily-tasks__card-header">
                <h3 className="daily-tasks__card-title">{task.todo}</h3>
                <span
                  className={`daily-tasks__priority ${
                    task.priority === "high"
                      ? "daily-tasks__priority--high"
                      : "daily-tasks__priority--normal"
                  }`}
                >
                  {task.priority === "high" ? "🔴 Важливо" : "🟡 Звичайно"}
                </span>
              </div>

              <div className="daily-tasks__card-body">
                <p className="daily-tasks__user">
                  👤 Користувач ID: {task.userId}
                </p>
                <label className="daily-tasks__checkbox">
                  <input
                    type="checkbox"
                    checked={completedTasks.has(task.id)}
                    onChange={() => toggleTaskCompletion(task.id)}
                    className="daily-tasks__checkbox-input"
                  />
                  <span className="daily-tasks__checkbox-label">
                    {completedTasks.has(task.id)
                      ? "✅ Виконано"
                      : "⭕ Не виконано"}
                  </span>
                </label>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
