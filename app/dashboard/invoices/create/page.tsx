import { fetchCustomers } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/create-form";


export default async function Page() {
    const customers = await fetchCustomers();
    const breadcrumbs = [
        { label: 'Invoices', href: '/dashboard/invoices' },
        {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
        }
    ];

    return (
        <main>
            <Breadcrumbs breadcrumbs={ breadcrumbs } />
            <Form customers={ customers } />
        </main>
    )
}