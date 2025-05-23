import Header from "@/components/layout/Header"
import OrderPanel from "@/components/orders/OrderPanel"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function CardapioPage() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <Header title="Cardápio" />
        <div className="flex flex-1">
          <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] bg-gray-50">
            <div className="p-6">
              <div className="flex flex-col space-y-1 mb-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-medium">Listagem do cardápio</h2>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
                <p className="text-sm text-gray-500">Gerencie os itens disponíveis no cardápio</p>
              </div>

              <div className="flex justify-between mb-6">
                <div className="relative w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input placeholder="Buscar no cardápio" className="pl-10 bg-white rounded-md border-gray-200" />
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600">+ Adicionar Item</Button>
              </div>

              <div className="space-y-4">
                {/* Item 1 */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 flex justify-between items-center" data-lov-id="Pizza Calabresa">
                  <div>
                    <div className="font-medium">Pizza Calabresa</div>
                    <div className="text-sm text-gray-500">Molho de tomate, calabresa, cebola e azeitonas</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">R$ 39,90</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Disponível</span>
                      <Switch defaultChecked className="data-[state=checked]:bg-teal-400" />
                    </div>
                    <Button variant="outline" className="text-orange-500 border-orange-200">
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                          stroke="#F97316"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z"
                          stroke="#F97316"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Editar
                    </Button>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 flex justify-between items-center" data-lov-id="Pizza Marguerita">
                  <div>
                    <div className="font-medium">Pizza Marguerita</div>
                    <div className="text-sm text-gray-500">Molho de tomate, mussarela, tomate e manjericão</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">R$ 36,90</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Disponível</span>
                      <Switch defaultChecked className="data-[state=checked]:bg-teal-400" />
                    </div>
                    <Button variant="outline" className="text-orange-500 border-orange-200">
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                          stroke="#F97316"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z"
                          stroke="#F97316"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Editar
                    </Button>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 flex justify-between items-center" data-lov-id="Hamburguer Classico">
                  <div>
                    <div className="font-medium">Hambúrguer Clássico</div>
                    <div className="text-sm text-gray-500">Pão, hambúrguer, queijo, alface, tomate e cebola</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">R$ 25,90</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Disponível</span>
                      <Switch defaultChecked className="data-[state=checked]:bg-teal-400" />
                    </div>
                    <Button variant="outline" className="text-orange-500 border-orange-200">
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                          stroke="#F97316"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z"
                          stroke="#F97316"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Editar
                    </Button>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 flex justify-between items-center" data-lov-id="Refrigerante Cola">
                  <div>
                    <div className="font-medium">Refrigerante Cola</div>
                    <div className="text-sm text-gray-500">Lata 350ml</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">R$ 6,00</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Indisponível</span>
                      <Switch className="data-[state=checked]:bg-teal-400" />
                    </div>
                    <Button variant="outline" className="text-orange-500 border-orange-200">
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                          stroke="#F97316"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z"
                          stroke="#F97316"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Editar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <OrderPanel />
        </div>
      </div>
    </div>
  )
} 