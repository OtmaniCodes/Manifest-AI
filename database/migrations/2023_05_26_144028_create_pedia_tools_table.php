<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedia_tools', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('image')->nullable();
            $table->string('tool_link')->nullable();
            $table->enum('version_state', ['Premium', 'Fremium', 'Free Trial'])->default('Fremium');
            $table->enum('status', ['PUBLISHED', 'DRAFT', 'PENDING'])->default('DRAFT');
            $table->text('description')->nullable();
            $table->boolean('is_popular')->default(0);
            $table->boolean('is_manifest_collection')->default(0);
            $table->unsignedBigInteger('category_id')->nullable(); 
            $table->float('price')->nullable();
            $table->string('video')->nullable();
            $table->text('features')->nullable();
            $table->timestamps();
            $table->foreign('category_id')->references('id')->on('pedia_categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pedia_tools');
    }
};
