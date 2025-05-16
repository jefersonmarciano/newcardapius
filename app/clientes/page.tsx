"use client"

import Header from "@/components/layout/Header"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ClientesPage() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <Header title="Clientes" />
        <div className="flex flex-1">
          <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] bg-gray-50">
            <div className="p-6">
              <div className="flex flex-col space-y-1 mb-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-medium">Listagem de clientes</h2>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
                <p className="text-sm text-gray-500">Clientes cadastrados no sistema</p>
              </div>

              <div className="flex justify-between mb-6">
                <div className="flex gap-2">
                  <div className="relative w-80">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input placeholder="Buscar Cliente" className="pl-10 bg-white rounded-md border-gray-200" />
                  </div>
                  <button className="p-2 bg-white border border-gray-200 rounded-md">
                    <Trash2 className="h-5 w-5 text-gray-500" />
                  </button>
                  <button className="p-2 bg-white border border-gray-200 rounded-md">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 7H21M6 12H18M10 17H14"
                        stroke="#667085"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600">+ Cadastrar cliente</Button>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                {/* Cliente 1 */}
                <div className="flex items-center p-4 border-b border-gray-100">
                  <div className="w-6 mr-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Alan Farias Freitas</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M21 10.8571C21 16.2857 12 21 12 21C12 21 3 16.2857 3 10.8571C3 8.70032 3.84285 6.63211 5.34315 5.1318C6.84344 3.63151 8.91164 2.78866 11.0684 2.78866C13.2252 2.78866 15.2934 3.63151 16.7937 5.1318C18.294 6.63211 19.1368 8.70032 19.1368 10.8571Z"
                          stroke="#9CA3AF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 13.7143C13.5747 13.7143 14.8571 12.4319 14.8571 10.8571C14.8571 9.28237 13.5747 8 12 8C10.4253 8 9.14286 9.28237 9.14286 10.8571C9.14286 12.4319 10.4253 13.7143 12 13.7143Z"
                          stroke="#9CA3AF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      11 98421-0974
                    </div>
                  </div>
                  <div className="w-48">
                    <div className="text-sm font-medium">Último pedido</div>
                    <div className="text-sm text-gray-500">28 de Janeiro de 2025</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full text-orange-500 hover:bg-orange-50">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.7167 8.28333L11.7167 8.28333L11.7171 8.28375C11.7736 8.34022 11.8186 8.40736 11.8492 8.48124C11.8798 8.55511 11.8955 8.63429 11.8955 8.71429C11.8955 8.79428 11.8798 8.87346 11.8492 8.94733C11.8186 9.02121 11.7736 9.08835 11.7171 9.14482C11.7171 9.14483 11.7171 9.14484 11.717 9.14485L9.14762 11.7143L9.14752 11.7142C9.03328 11.8284 8.87818 11.8928 8.71667 11.8928C8.55515 11.8928 8.40005 11.8284 8.28581 11.7142C8.17158 11.5999 8.10714 11.4448 8.10714 11.2833C8.10714 11.1218 8.17158 10.9667 8.28581 10.8524L8.28591 10.8525L10.8553 8.28304L10.8552 8.28294C10.9695 8.1687 11.0339 8.0136 11.0339 7.85209C11.0339 7.69058 10.9695 7.53548 10.8552 7.42124L10.8553 7.42115L8.28591 4.85209L8.28581 4.85219C8.17158 4.73795 8.10714 4.58285 8.10714 4.42134C8.10714 4.25982 8.17158 4.10472 8.28581 3.99048C8.40005 3.87625 8.55515 3.81181 8.71667 3.81181C8.87818 3.81181 9.03328 3.87625 9.14752 3.99048L9.14762 3.99058L11.717 6.55996L11.7171 6.55985C11.7736 6.61633 11.8186 6.68346 11.8492 6.75734C11.8798 6.83121 11.8955 6.91039 11.8955 6.99039C11.8955 7.07038 11.8798 7.14956 11.8492 7.22344C11.8186 7.29731 11.7736 7.36445 11.7171 7.42092L11.7167 7.42134L11.7167 8.28333Z"
                          fill="#F97316"
                          stroke="#F97316"
                          strokeWidth="0.2"
                        />
                      </svg>
                    </button>
                    <button className="p-2 rounded-full text-green-500 hover:bg-green-50">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.0025 3.33334C8.10089 3.33551 6.27548 4.04301 4.88439 5.3075C3.4933 6.57199 2.63427 8.30134 2.48356 10.1942C2.33285 12.087 2.90377 13.9652 4.08676 15.4616C5.26974 16.9579 6.97865 17.9584 8.85919 18.2692C8.90002 18.275 8.94169 18.275 8.98252 18.2692C9.65752 18.3525 10.3409 18.3525 11.0159 18.2692C12.8965 17.9584 14.6054 16.9579 15.7883 15.4616C16.9713 13.9652 17.5423 12.087 17.3916 10.1942C17.2408 8.30134 16.3818 6.57199 14.9907 5.3075C13.5996 4.04301 11.7742 3.33551 9.87252 3.33334H10.0025ZM13.3359 13.3333C13.3359 13.3333 12.0859 14.5833 10.0025 14.5833C7.91919 14.5833 6.66919 13.3333 6.66919 13.3333"
                          stroke="#22C55E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.5 9.16666C7.5 9.16666 7.5 8.33332 7.5 7.91666C7.5 7.08332 8.33333 6.66666 9.16667 6.66666H10.8333C11.6667 6.66666 12.5 7.08332 12.5 7.91666C12.5 8.74999 11.6667 9.16666 10.8333 9.16666H9.16667C8.33333 9.16666 7.5 9.58332 7.5 10.4167C7.5 11.25 8.33333 11.6667 9.16667 11.6667H10.8333C11.6667 11.6667 12.5 11.25 12.5 10.4167C12.5 10 12.5 9.16666 12.5 9.16666"
                          stroke="#22C55E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button className="p-2 rounded-full text-red-500 hover:bg-red-50">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.6667 5.00001L15.8334 15.8333C15.7883 16.3674 15.5557 16.8657 15.1805 17.2324C14.8053 17.5992 14.3142 17.8125 13.8 17.8333H6.20004C5.68586 17.8125 5.19476 17.5992 4.81956 17.2324C4.44437 16.8657 4.21174 16.3674 4.16671 15.8333L3.33337 5.00001M8.33337 9.16667V13.3333M11.6667 9.16667V13.3333M12.5 5.00001V2.50001C12.5 2.27899 12.4122 2.06703 12.2559 1.91075C12.0996 1.75447 11.8877 1.66667 11.6667 1.66667H8.33337C8.11236 1.66667 7.90039 1.75447 7.74412 1.91075C7.58784 2.06703 7.50004 2.27899 7.50004 2.50001V5.00001M2.50004 5.00001H17.5"
                          stroke="#EF4444"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Cliente 2 */}
                <div className="flex items-center p-4 border-b border-gray-100">
                  <div className="w-6 mr-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Camila Gomes</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M21 10.8571C21 16.2857 12 21 12 21C12 21 3 16.2857 3 10.8571C3 8.70032 3.84285 6.63211 5.34315 5.1318C6.84344 3.63151 8.91164 2.78866 11.0684 2.78866C13.2252 2.78866 15.2934 3.63151 16.7937 5.1318C18.294 6.63211 19.1368 8.70032 19.1368 10.8571Z"
                          stroke="#9CA3AF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 13.7143C13.5747 13.7143 14.8571 12.4319 14.8571 10.8571C14.8571 9.28237 13.5747 8 12 8C10.4253 8 9.14286 9.28237 9.14286 10.8571C9.14286 12.4319 10.4253 13.7143 12 13.7143Z"
                          stroke="#9CA3AF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      11 98421-0974
                    </div>
                  </div>
                  <div className="w-48">
                    <div className="text-sm font-medium">Último pedido</div>
                    <div className="text-sm text-gray-500">28 de Janeiro de 2025</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full text-orange-500 hover:bg-orange-50">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.7167 8.28333L11.7167 8.28333L11.7171 8.28375C11.7736 8.34022 11.8186 8.40736 11.8492 8.48124C11.8798 8.55511 11.8955 8.63429 11.8955 8.71429C11.8955 8.79428 11.8798 8.87346 11.8492 8.94733C11.8186 9.02121 11.7736 9.08835 11.7171 9.14482C11.7171 9.14483 11.7171 9.14484 11.717 9.14485L9.14762 11.7143L9.14752 11.7142C9.03328 11.8284 8.87818 11.8928 8.71667 11.8928C8.55515 11.8928 8.40005 11.8284 8.28581 11.7142C8.17158 11.5999 8.10714 11.4448 8.10714 11.2833C8.10714 11.1218 8.17158 10.9667 8.28581 10.8524L8.28591 10.8525L10.8553 8.28304L10.8552 8.28294C10.9695 8.1687 11.0339 8.0136 11.0339 7.85209C11.0339 7.69058 10.9695 7.53548 10.8552 7.42124L10.8553 7.42115L8.28591 4.85209L8.28581 4.85219C8.17158 4.73795 8.10714 4.58285 8.10714 4.42134C8.10714 4.25982 8.17158 4.10472 8.28581 3.99048C8.40005 3.87625 8.55515 3.81181 8.71667 3.81181C8.87818 3.81181 9.03328 3.87625 9.14752 3.99048L9.14762 3.99058L11.717 6.55996L11.7171 6.55985C11.7736 6.61633 11.8186 6.68346 11.8492 6.75734C11.8798 6.83121 11.8955 6.91039 11.8955 6.99039C11.8955 7.07038 11.8798 7.14956 11.8492 7.22344C11.8186 7.29731 11.7736 7.36445 11.7171 7.42092L11.7167 7.42134L11.7167 8.28333Z"
                          fill="#F97316"
                          stroke="#F97316"
                          strokeWidth="0.2"
                        />
                      </svg>
                    </button>
                    <button className="p-2 rounded-full text-green-500 hover:bg-green-50">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.0025 3.33334C8.10089 3.33551 6.27548 4.04301 4.88439 5.3075C3.4933 6.57199 2.63427 8.30134 2.48356 10.1942C2.33285 12.087 2.90377 13.9652 4.08676 15.4616C5.26974 16.9579 6.97865 17.9584 8.85919 18.2692C8.90002 18.275 8.94169 18.275 8.98252 18.2692C9.65752 18.3525 10.3409 18.3525 11.0159 18.2692C12.8965 17.9584 14.6054 16.9579 15.7883 15.4616C16.9713 13.9652 17.5423 12.087 17.3916 10.1942C17.2408 8.30134 16.3818 6.57199 14.9907 5.3075C13.5996 4.04301 11.7742 3.33551 9.87252 3.33334H10.0025ZM13.3359 13.3333C13.3359 13.3333 12.0859 14.5833 10.0025 14.5833C7.91919 14.5833 6.66919 13.3333 6.66919 13.3333"
                          stroke="#22C55E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.5 9.16666C7.5 9.16666 7.5 8.33332 7.5 7.91666C7.5 7.08332 8.33333 6.66666 9.16667 6.66666H10.8333C11.6667 6.66666 12.5 7.08332 12.5 7.91666C12.5 8.74999 11.6667 9.16666 10.8333 9.16666H9.16667C8.33333 9.16666 7.5 9.58332 7.5 10.4167C7.5 11.25 8.33333 11.6667 9.16667 11.6667H10.8333C11.6667 11.6667 12.5 11.25 12.5 10.4167C12.5 10 12.5 9.16666 12.5 9.16666"
                          stroke="#22C55E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button className="p-2 rounded-full text-red-500 hover:bg-red-50">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.6667 5.00001L15.8334 15.8333C15.7883 16.3674 15.5557 16.8657 15.1805 17.2324C14.8053 17.5992 14.3142 17.8125 13.8 17.8333H6.20004C5.68586 17.8125 5.19476 17.5992 4.81956 17.2324C4.44437 16.8657 4.21174 16.3674 4.16671 15.8333L3.33337 5.00001M8.33337 9.16667V13.3333M11.6667 9.16667V13.3333M12.5 5.00001V2.50001C12.5 2.27899 12.4122 2.06703 12.2559 1.91075C12.0996 1.75447 11.8877 1.66667 11.6667 1.66667H8.33337C8.11236 1.66667 7.90039 1.75447 7.74412 1.91075C7.58784 2.06703 7.50004 2.27899 7.50004 2.50001V5.00001M2.50004 5.00001H17.5"
                          stroke="#EF4444"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
