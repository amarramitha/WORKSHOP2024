import DataTable from '../components/DataTable';
import { Card } from "../components/Card";
import { PRODUCT_TABLE } from "../configs/table";
import { productData } from '../data/product';
import { Copyright } from "../components/Copyright";

export default function ProductPage() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl rounded-lg p-6">
      <Card title="Product List">
        {/* <h1 className="text-center text-2xl font-bold mb-6 text-black">Product Table</h1> */}
        <div className="overflow-x-auto">
          <DataTable config={PRODUCT_TABLE} data={productData} />
        </div>
        </Card>
        <Copyright />
      </div>
    </div>
  );
}
