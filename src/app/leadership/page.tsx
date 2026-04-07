"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  boardMembers,
  boardRoleLabels,
  leadershipPageCopy,
} from "@/lib/board-members";

export default function LeadershipPage() {
  const { language } = useLanguage();
  const copy = leadershipPageCopy[language];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <p className="text-sm md:text-lg font-bold text-text-main dark:text-white leading-snug max-w-5xl mx-auto">
            {copy.organizationName}
          </p>
          <h1 className="text-3xl md:text-5xl font-black text-text-main dark:text-white mt-6">
            {copy.boardTitle}
          </h1>
        </header>

        <section className="bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[960px] w-full">
              <thead className="bg-gray-50 dark:bg-surface-dark">
                <tr>
                  <th className="text-left p-4 text-xs md:text-sm font-bold uppercase tracking-wide text-text-main dark:text-white w-16">
                    {copy.columns.index}
                  </th>
                  <th className="text-left p-4 text-xs md:text-sm font-bold uppercase tracking-wide text-text-main dark:text-white">
                    {copy.columns.memberName}
                  </th>
                  <th className="text-left p-4 text-xs md:text-sm font-bold uppercase tracking-wide text-text-main dark:text-white">
                    {copy.columns.workplace}
                  </th>
                  <th className="text-left p-4 text-xs md:text-sm font-bold uppercase tracking-wide text-text-main dark:text-white">
                    {copy.columns.boardPosition}
                  </th>
                </tr>
              </thead>
              <tbody>
                {boardMembers.map((member) => (
                  <tr
                    key={member.id}
                    className="border-t border-gray-100 dark:border-gray-800"
                  >
                    <td className="p-4 text-lg font-bold text-text-main dark:text-white align-top">
                      {member.id}
                    </td>
                    <td className="p-4 text-text-main dark:text-gray-200 font-semibold align-top">
                      {member.name[language]}
                    </td>
                    <td className="p-4 text-text-muted dark:text-gray-400 align-top">
                      {member.workplace[language]}
                    </td>
                    <td className="p-4 text-text-main dark:text-gray-300 font-semibold align-top">
                      {boardRoleLabels[language][member.role]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
