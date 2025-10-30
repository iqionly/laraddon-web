<nav class="w-16 shadow-md">
    <ul class="top-0 left-0 m-0 h-screen bg-black list-none flex flex-col justify-between">
        <li class="section">
            <ul class="list-none items-center flex flex-col">
                <li class="bg-white m-2 text-center justify-center w-12 h-12 border rounded-2xl">
                    <a href="#search" class="flex items-center justify-center h-full w-full">
                        <span class="material-icons">search</span>
                    </a>
                </li>
                <li class="bg-white m-2 text-center justify-center w-12 h-12 border rounded-2xl">
                    <a href="{{ url('/') }}" class="flex items-center justify-center h-full w-full">
                        <span class="material-icons">home</span>
                    </a>
                </li>
                <li class="bg-white m-2 text-center justify-center w-12 h-12 border rounded-2xl">
                    <a href="{{ url('/') }}" class="flex items-center justify-center h-full w-full">
                        <span class="material-icons">person</span>
                    </a>
                </li>
            </ul>
        </li>
        <li class="section">
            <ul class="list-none items-center flex flex-col">
                <hr class="w-2/4 my-1 border border-gray-700 rounded-full"/>
                <li class="bg-white m-2 text-center justify-center w-12 h-12 border rounded-2xl">
                    <a href="{{ url('/') }}" class="flex items-center justify-center h-full w-full">
                        <span class="material-icons">settings_ethernet</span>
                    </a>
                </li>
                <li class="bg-white m-2 text-center justify-center w-12 h-12 border rounded-2xl">
                    <a href="{{ url('/') }}" class="flex items-center justify-center h-full w-full">
                        <span class="material-icons">settings</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</nav>