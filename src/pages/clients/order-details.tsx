import React, { useState } from 'react'
import LayoutClient from '../../components/layout-clients/layout'
import { Helmet } from 'react-helmet'
import { Datepicker, Label, Radio, TextInput, ToggleSwitch } from 'flowbite-react'
import { ArrowsLeftRight } from '@phosphor-icons/react'
import ItemCardFlightOrdersDetails from '../../components/layout-clients/part/item-card-flight'

const OrderDetailsPage = () => {

    const [sameWithPemesan, setSameWithPemesan] = useState(false);

    const renderDetailPemesan = (
        <>
            <div>
                <h5 className="text-neutral-600 text-2xl font-bold font-['Open Sans'] leading-10">Detail Pemesan</h5>
                <p className="text-neutral-500 text-base font-semibold font-['Open Sans'] leading-normal">Detail kontak ini akan digunakan untuk pengiriman e-ticket</p>
            </div>
            <div className='bg-white rounded-[27.51px] p-8 w-full flex flex-col gap-4 mt-4 pb-10'>
                {/* Section Sapaan */}
                <div className='sapaan'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Sapaan</h6>
                    <fieldset className="flex max-w-md flex-row gap-4 mt-2">
                        <div className="flex items-center gap-2">
                            <Radio id="tuan" name="countries" value="tuan" defaultChecked />
                            <Label htmlFor="tuan">Tuan</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="Nyonya" name="countries" value="Nyonya" />
                            <Label htmlFor="Nyonya">Nyonya</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="spain" name="countries" value="Nona" />
                            <Label htmlFor="Nona">Nona</Label>
                        </div>
                    </fieldset>
                </div>

                <div className='nama_lengkap flex flex-col gap-2'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Nama Lengkap</h6>
                    <TextInput title='Nama Lengkap' onChange={(e)=>console.log(e.target.value)} type='text'/>
                    <p className='text-sm text-gray-300'>Seperti di KTP, Paspor, dan SIM</p>
                </div>

                <div className='nama_lengkap flex flex-col gap-2'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Nomor Ponsel</h6>
                    <TextInput title='Nomor Ponsel' value='' type='number'/>
                </div>

                <div className='nama_lengkap flex flex-col gap-2'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Email</h6>
                    <TextInput title='Email' value='' type='email'/>
                </div>

            </div>
        </>
    )

    const renderDetailPenumpangDewasa = (
        <>
            <div className='bg-white rounded-[27.51px] p-8 w-full flex flex-col gap-4 mt-4 pb-10'>
                <div className='flex flex-row justify-between'>
                    <h1>Penumpang 1 (Dewasa)</h1>
                    <ToggleSwitch checked={sameWithPemesan} label="Sama dengan pemesan" onChange={setSameWithPemesan} />
                </div>
                {/* Section Sapaan */}
                <div className='sapaan'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Sapaan</h6>
                    <fieldset className="flex max-w-md flex-row gap-4 mt-2">
                        <div className="flex items-center gap-2">
                            <Radio id="tuan" name="countries" value="tuan" defaultChecked />
                            <Label htmlFor="tuan">Tuan</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="Nyonya" name="countries" value="Nyonya" />
                            <Label htmlFor="Nyonya">Nyonya</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="Nona" name="countries" value="Nona" />
                            <Label htmlFor="Nona">Nona</Label>
                        </div>
                    </fieldset>
                </div>

                <div className='nama_lengkap flex flex-col gap-2'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Nama Lengkap</h6>
                    <TextInput title='Nama Lengkap' value='' type='text'/>
                    <p className='text-sm text-gray-300'>Seperti di KTP, Paspor, dan SIM</p>
                </div>

                <div className='tanggal_lagir flex flex-col gap-2'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Tanggal Lahir</h6>
                    <Datepicker className='w-full' title="Tanggal Lahir" />
                </div>

            </div>
        </>
    )

    const renderDetailPenumpangAnak = (
        <>
            <div className='bg-white rounded-[27.51px] p-8 w-full flex flex-col gap-4 mt-4 pb-10'>
                <div className='flex flex-row'>
                    <h1>Penumpang 1 (Anak-anak)</h1>
                </div>
                {/* Section Sapaan */}
                <div className='sapaan'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Sapaan</h6>
                    <fieldset className="flex max-w-md flex-row gap-4 mt-2">
                        <div className="flex items-center gap-2">
                            <Radio id="tuan" name="countries" value="tuan" defaultChecked />
                            <Label htmlFor="tuan">Tuan</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="Nona" name="countries" value="Nona" />
                            <Label htmlFor="Nona">Nona</Label>
                        </div>
                    </fieldset>
                </div>

                <div className='nama_lengkap flex flex-col gap-2'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Nama Lengkap</h6>
                    <TextInput title='Nama Lengkap' value='' type='text'/>
                    <p className='text-sm text-gray-300'>Seperti di KTP, Paspor, dan SIM</p>
                </div>

                <div className='tanggal_lagir flex flex-col gap-2'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Tanggal Lahir</h6>
                    <Datepicker className='w-full' title="Tanggal Lahir" />
                    <p className='text-sm text-gray-300'>Penumpang anak (Usia 2-11 tahun)</p>
                </div>

            </div>
        </>
    )

    const renderDetailPenumpangBayi = (
        <>
            <div className='bg-white rounded-[27.51px] p-8 w-full flex flex-col gap-4 mt-4 pb-10'>
                <div className='flex flex-row'>
                    <h1>Penumpang 1 (Bayu)</h1>
                </div>
                {/* Section Sapaan */}
                <div className='sapaan'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Sapaan</h6>
                    <fieldset className="flex max-w-md flex-row gap-4 mt-2">
                        <div className="flex items-center gap-2">
                            <Radio id="tuan" name="countries" value="tuan" defaultChecked />
                            <Label htmlFor="tuan">Tuan</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio id="Nona" name="countries" value="Nona" />
                            <Label htmlFor="Nona">Nona</Label>
                        </div>
                    </fieldset>
                </div>

                <div className='nama_lengkap flex flex-col gap-2'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Nama Lengkap</h6>
                    <TextInput title='Nama Lengkap' value='' type='text'/>
                    <p className='text-sm text-gray-300'>Seperti di KTP, Paspor, dan SIM</p>
                </div>

                <div className='tanggal_lagir flex flex-col gap-2'>
                    <h6 className="text-neutral-600 text-md font-semibold font-['Open Sans'] leading-7">Tanggal Lahir</h6>
                    <Datepicker className='w-full' title="Tanggal Lahir" />
                    <p className='text-sm text-gray-300'>Penumpang bayi harus diatas 3 bulan dan di bawah 2 tahun</p>
                </div>

            </div>
        </>
    )

    const renderInfoFlight = (
        <div className='flex flex-col gap-3'>
            <div className='bg-white p-8 rounded-[27.51px]'>
                <div className='flex flex-row items-center gap-3'>
                    <p className='font-bold text-lg'>Jakarta</p>
                    <ArrowsLeftRight size={24} />
                    <p className='font-bold text-lg'>Bali</p>
                </div>
                <hr className='my-8' />
                <ItemCardFlightOrdersDetails/>
                <ItemCardFlightOrdersDetails/>
                <div className='flex flex-row justify-between items-center'>
                    <p className='text-md text-gray-600'>Total Pembayaran</p>
                    <p className='text-lg text-gray-700 font-bold'>Rp. 1.3800.000</p>
                </div>
            </div>
            <button className='my-3 rounded-full w-full bg-[#F1A025] py-4 font-bold text-xl text-white'>
                Lanjut Pembayaran
            </button>
        </div>
    )

    return (
        <LayoutClient>
            <div className='px-32 flex flex-col md:flex-row justify-between gap-2 w-full bg-indigo-50 mt-28 pb-32'>
                <Helmet>
                    <title>Flight | Order Detail</title>
                    <meta name="description" content="Order details" />
                </Helmet>
                <div className='flex flex-col gap-1 mt-12 w-[68%]'>
                    {renderDetailPemesan}
                    <div className='mt-4'>
                        <h5 className="text-neutral-600 text-2xl font-bold font-['Open Sans'] leading-10">Detail Penumpang</h5>
                    </div>
                    {renderDetailPenumpangDewasa}
                    {renderDetailPenumpangAnak}
                    {renderDetailPenumpangBayi}
                </div>
                <div className='flex flex-col gap-1 mt-10 w-[30%]'>
                    {renderInfoFlight}
                </div>
            </div>
        </LayoutClient>
    )
}

export default OrderDetailsPage