/* eslint-disable no-unused-vars */
import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import SectionAdminPosts from "../components/section/SectionAdminPosts";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <SectionAdminPosts />
    </AdminLayout>
  );
}
