import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: "dashboard",
    data: {
      breadcrumb: "Dashboard",
    },
    loadChildren: () => import("../../component/dashboard/dashboard.routes"),
  },
  {
    path: "widgets",
    data: {
      breadcrumb: "Widgets",
    },
    loadChildren: () => import("../../component/widgtes/widgets.routes"),
  },
  {
    path: "page-layout",
    data: {
      breadcrumb: "Page Layout",
    },
    loadChildren: () =>
      import("../../component/page-layout/page-layout.routes"),
  },
  {
    path: "project",
    data: {
      breadcrumb: "Project",
    },
    loadChildren: () => import("../../component/project/project.routes"),
  },
  {
    path: "file-manager",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () =>
      import("../../component/file-manager/file-manager.routes"),
  },
  {
    path: "ecommerce",
    data: {
      breadcrumb: "Ecommerce",
    },
    loadChildren: () => import("../../component/e-commerce/e-commerce.routes"),
  },
  {
    path: "letter-box",
    data: {
      breadcrumb: "Email",
    },
    loadChildren: () => import("../../component/letter-box/letter-box.routes"),
  },
  {
    path: "chat",
    data: {
      breadcrumb: "Chat",
    },
    loadChildren: () => import("../../component/chat/chat.routes"),
  },
  {
    path: "user",
    data: {
      breadcrumb: "Users",
    },
    loadChildren: () => import("../../component/users/users.routes"),
  },
  {
    path: "bookmarks",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () => import("../../component/bookmark/bookmark.routes"),
  },
  {
    path: "contact",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () => import("../../component/contact/contact.routes"),
  },
  {
    path: "tasks",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () => import("../../component/task/task.routes"),
  },
  {
    path: "calender",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () => import("../../component/calendar/calendar.routes"),
  },
  {
    path: "social-app",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () => import("../../component/social-app/social-app.routes"),
  },
  {
    path: "todo",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () => import("../../component/todo/todo.routes"),
  },
  {
    path: "todo",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () => import("../../component/todo/todo.routes"),
  },
  {
    path: "search-result",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () =>
      import("../../component/search-result/search-result.routes"),
  },
  {
    path: "form-controls",
    data: {
      breadcrumb: "Form Controls",
    },
    loadChildren: () =>
      import("../../component/forms/form-controls/form-controls.routes"),
  },
  {
    path: "form-widgets",
    data: {
      breadcrumb: "Form Widgets",
    },
    loadChildren: () =>
      import("../../component/forms/form-widgets/form-widgets.routes"),
  },
  {
    path: "table",
    data: {
      breadcrumb: "Tables",
    },
    loadChildren: () => import("../../component/table/table.routes"),
  },
  {
    path: "ui-kits",
    data: {
      breadcrumb: "Ui Kits",
    },
    loadChildren: () => import("../../component/ui-kits/ui-kits.routes"),
  },
  {
    path: "bonus-ui",
    data: {
      breadcrumb: "Bonus Ui",
    },
    loadChildren: () => import("../../component/bonus-ui/bonus-ui.routes"),
  },
  {
    path: "icons",
    data: {
      breadcrumb: "Icons",
    },
    loadChildren: () => import("../../component/icons/icons.routes"),
  },
  {
    path: "buttons",
    data: {
      breadcrumb: "Buttons",
    },
    loadChildren: () => import("../../component/buttons/buttons.routes"),
  },
  {
    path: "chart",
    data: {
      breadcrumb: "Charts",
    },
    loadChildren: () => import("../../component/charts/charts.routes"),
  },
  {
    path: "sample-page",
    data: {
      breadcrumb: "Pages",
    },
    loadChildren: () =>
      import("../../component/sample-page/sample-page.routes"),
  },
  {
    path: "gallary",
    data: {
      breadcrumb: "Gallery",
    },
    loadChildren: () => import("../../component/gallery/gallery.routes"),
  },
  {
    path: "blog",
    data: {
      breadcrumb: "Blog",
    },
    loadChildren: () => import("../../component/blog/blog.routes"),
  },
  {
    path: "faq",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () => import("../../component/faq/faq.routes"),
  },
  {
    path: "job-search",
    data: {
      breadcrumb: "Job Search",
    },
    loadChildren: () => import("../../component/job-search/job-search.routes"),
  },
  {
    path: "learning",
    data: {
      breadcrumb: "Learning",
    },
    loadChildren: () => import("../../component/learning/learning-routing"),
  },
  {
    path: "maps",
    data: {
      breadcrumb: "Maps",
    },
    loadChildren: () => import("../../component/maps/maps.routes"),
  },
  {
    path: "editors",
    data: {
      breadcrumb: "Editors",
    },
    loadChildren: () => import("../../component/editors/editors.routes"),
  },
  {
    path: "knowledgebase",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () =>
      import("../../component/knowledgebase/knowledgebase.routes"),
  },
  {
    path: "support-ticket",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () =>
      import("../../component/support-tickit/support-tickit.routes"),
  },
];
