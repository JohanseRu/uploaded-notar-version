import {
  HomeOutlined,
  DatabaseOutlined,
  UserOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const menuItems = [
  { key: "1", icon: <HomeOutlined />, label: <a href="/home">Gestión de Rentas (Inicio)</a> },
  {
    key: "2",
    icon: <DatabaseOutlined />,
    label: "Rentas",
    children: [
      { key: "2.1", label: <a href="/CaseRentsForm">Radicados de Rentas</a> },
      { key: "2.2", label: <a href="/caseRentsFinished">Casos Finalizados</a> },
    ],
  },
  {
    key: "3",
    icon: <UserOutlined />,
    label: "Protocolistas",
    children: [
      { key: "3.1", label: <a href="/protocolist">Lista de Protocolistas</a> },
      { key: "3.2", label: "Campo disponible" },
      { key: "3.3", label: "Campo disponible" },
    ],
  },
  {
    key: "4",
    icon: <FileAddOutlined />,
    label: "Archivo",
    children: [
      { key: "4.1", label: <a href="/CreateArchivo">Crear Archivo</a>},
      { key: "4.2", label: <a href="/LendBook">Préstamos</a>},
      { key: "4.3", label: <a href="/Reports">Informes</a>},
    ],
  },
];

export const Sidebar = () => (
  <Menu
    theme="light"
    defaultSelectedKeys={["1"]}
    mode="inline"
    items={menuItems}
    style={{ backgroundColor: "#FFFFFF", fontWeight: "500" }}
  />
);
